# ProSpin + Webpay Plus (ambiente de integración)

1. Instala Node.js (v18 o superior): https://nodejs.org
2. En esta carpeta ejecuta:
   npm install
   npm start
3. Abre http://localhost:3000 (NO abras index.html con doble clic: Webpay necesita el servidor).

## Tarjetas de prueba (integración)
- VISA aprobada: 4051 885600446623, CVV 123, cualquier fecha futura
- Mastercard rechazada: 5186 059559590568, CVV 123
- En el login del banco simulado: RUT 11.111.111-1, clave 123

Credenciales de integración (públicas): código de comercio 597055555532.
Para producción hay que pedir tus propias credenciales a Transbank y cambiar buildForIntegration por buildForProduction en server.js.