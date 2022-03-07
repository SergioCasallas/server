exports.sendNewPassword = (newPassword, UUID) => {
  return `UPDATE rp_track_and_trace_framework.Bio_Clientes SET Primera_Vez = "0", Contraseña = "${newPassword}" where UUID = "${UUID}"`;
};
