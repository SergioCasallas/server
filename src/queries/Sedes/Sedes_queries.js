exports.userSedes = (userUUID) => {
  return `SELECT UUID,Nombre_Sede,Frecuencia FROM rp_track_and_trace_framework.Bio_Sedes where UUID_cliente = '${userUUID}'`;
};
