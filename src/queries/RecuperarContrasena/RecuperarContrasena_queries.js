exports.recuperarContrasena = (datos) => {
  console.log(datos);
  return `SELECT Email, Contraseña, Cliente FROM rp_track_and_trace_framework.Bio_Clientes where Nit = "${datos.nit}" `;
};
