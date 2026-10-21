// Servidor ProSpin: sirve la tienda y conecta con Webpay Plus (ambiente de INTEGRACIÓN)
const express = require('express');
const fs = require('fs');
const path = require('path');
const { WebpayPlus } = require('transbank-sdk');
const { IntegrationCommerceCodes, IntegrationApiKeys } = require('transbank-sdk');

const PORT = process.env.PORT || 3000;
const BASE_URL = process.env.BASE_URL || `http://localhost:${PORT}`;

// Credenciales públicas de pruebas de Transbank (solo funcionan en integración).
// Para producción se reemplazan por tu código de comercio y API key reales.
const webpay = WebpayPlus.Transaction.buildForIntegration(
  IntegrationCommerceCodes.WEBPAY_PLUS,
  IntegrationApiKeys.WEBPAY
);

// Lee los precios reales desde script.js para no confiar en los precios que manda el navegador
function cargarProductos() {
  const src = fs.readFileSync(path.join(__dirname, 'script.js'), 'utf8');
  const inicio = src.indexOf('const totalProductos = [');
  if (inicio === -1) throw new Error('No se encontró totalProductos en script.js');
  let i = src.indexOf('[', inicio), nivel = 0, fin = -1, enTexto = false, esc = false;
  for (let k = i; k < src.length; k++) {
    const c = src[k];
    if (enTexto) { if (esc) esc = false; else if (c === '\\') esc = true; else if (c === '"') enTexto = false; continue; }
    if (c === '"') enTexto = true;
    else if (c === '[') nivel++;
    else if (c === ']' && --nivel === 0) { fin = k; break; }
  }
  const lista = JSON.parse(src.slice(i, fin + 1));
  return new Map(lista.map(p => [p.id, p]));
}
const productos = cargarProductos();
console.log(`Productos cargados: ${productos.size}`);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 1) Crear la transacción y devolver url + token para redirigir al cliente a Webpay
app.post('/api/webpay/crear', async (req, res) => {
  try {
    const { items, numeroPedido } = req.body || {};
    if (!Array.isArray(items) || items.length === 0) return res.status(400).json({ error: 'Carrito vacío' });

    let monto = 0;
    for (const it of items) {
      const prod = productos.get(it.id);
      const cant = parseInt(it.quantity, 10);
      if (!prod || !(cant > 0) || cant > 99) return res.status(400).json({ error: 'Producto inválido: ' + it.id });
      monto += prod.price * cant;
    }

    const buyOrder = String(numeroPedido || 'PS-' + Date.now()).slice(0, 26); // máx. 26 caracteres
    const sessionId = 'sesion-' + Date.now();
    const returnUrl = `${BASE_URL}/api/webpay/retorno`;

    const resp = await webpay.create(buyOrder, sessionId, monto, returnUrl);
    res.json({ url: resp.url, token: resp.token, monto });
  } catch (err) {
    console.error('Error al crear transacción:', err.message);
    res.status(500).json({ error: 'No se pudo iniciar el pago' });
  }
});

// 2) Webpay devuelve al cliente aquí (GET o POST). Se confirma (commit) y se redirige a la tienda.
async function retorno(req, res) {
  const datos = { ...req.query, ...req.body };
  const token = datos.token_ws;

  // Cliente anuló el pago en Webpay (llegan TBK_* y no token_ws), o el formulario expiró
  if (!token) {
    return res.redirect(`/?pago=cancelado&orden=${encodeURIComponent(datos.TBK_ORDEN_COMPRA || '')}`);
  }
  try {
    const r = await webpay.commit(token);
    const aprobado = r.status === 'AUTHORIZED' && r.response_code === 0;
    const q = new URLSearchParams({
      pago: aprobado ? 'ok' : 'rechazado',
      orden: r.buy_order || '',
      monto: String(r.amount || ''),
      auth: r.authorization_code || '',
      tarjeta: (r.card_detail && r.card_detail.card_number) || '',
      tipo: r.payment_type_code || ''
    });
    res.redirect('/?' + q.toString());
  } catch (err) {
    console.error('Error al confirmar:', err.message);
    res.redirect('/?pago=error');
  }
}
app.get('/api/webpay/retorno', retorno);
app.post('/api/webpay/retorno', retorno);

// Archivos de la tienda (index.html, style.css, script.js, img/...)
app.use(express.static(__dirname, { index: 'index.html', dotfiles: 'ignore' }));

app.listen(PORT, () => console.log(`ProSpin en ${BASE_URL}`));