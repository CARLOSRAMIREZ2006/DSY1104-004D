// Gestión de sesión y llamadas a la API.
// La sesión se guarda en sessionStorage: sobrevive a las recargas de la pestaña
// y se borra al cerrarla. El token nunca se pide al usuario.
const API_BASE = '/api/v1';
const CLAVE_SESION = 'prospin_sesion';

function decodificarPayload(token) {
  try {
    const base = token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/');
    return JSON.parse(atob(base));
  } catch (e) {
    return null;
  }
}

function guardarSesion(datos, email) {
  const payload = decodificarPayload(datos.token);
  sessionStorage.setItem(CLAVE_SESION, JSON.stringify({
    token: datos.token,
    rol: datos.rol,
    email: email || (payload && payload.sub)
  }));
}

function getSesion() {
  const raw = sessionStorage.getItem(CLAVE_SESION);
  if (!raw) return null;
  try {
    const s = JSON.parse(raw);
    const payload = decodificarPayload(s.token);
    // Si el token venció, la sesión se cierra sola
    if (!payload || Date.now() / 1000 >= payload.exp) {
      clearSesion();
      return null;
    }
    return s;
  } catch (e) {
    clearSesion();
    return null;
  }
}

function clearSesion() {
  sessionStorage.removeItem(CLAVE_SESION);
}

// Úsala al inicio de cada página protegida
function requireSesion(rolesPermitidos) {
  const s = getSesion();
  if (!s) {
    location.replace('login.html');
    return null;
  }
  if (rolesPermitidos && !rolesPermitidos.includes(s.rol)) {
    location.replace('tienda.html');
    return null;
  }
  return s;
}

function mensajeHttp(status) {
  switch (status) {
    case 400: return 'Los datos enviados no son válidos.';
    case 401: return 'Tu sesión expiró. Vuelve a iniciar sesión.';
    case 403: return 'Tu rol no tiene permiso para esta acción.';
    case 404: return 'No se encontró el recurso solicitado.';
    case 409: return 'No se pudo completar: stock insuficiente o dato duplicado.';
    default:  return 'Error del servidor (' + status + ').';
  }
}

// Envuelve fetch: agrega el token y maneja la expiración de sesión
async function apiFetch(ruta, opciones = {}) {
  const s = getSesion();
  const cabeceras = { 'Content-Type': 'application/json', ...(opciones.headers || {}) };
  if (s) cabeceras['Authorization'] = 'Bearer ' + s.token;

  const res = await fetch(API_BASE + ruta, { ...opciones, headers: cabeceras });

  if (res.status === 401 && s) {
    clearSesion();
    location.replace('login.html?motivo=expirada');
    throw new Error(mensajeHttp(401));
  }
  if (!res.ok) throw new Error(mensajeHttp(res.status));
  if (res.status === 204) return null;
  return res.json();
}
