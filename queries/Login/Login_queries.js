exports.userLogin = (userEmail, userPassword) => {
  return `SELECT * FROM rp_track_and_trace_framework.Bio_Clientes WHERE Email = '${userEmail}' AND Contraseña = '${userPassword}'`;
};

