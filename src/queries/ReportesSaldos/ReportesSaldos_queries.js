exports.getReportesSaldos = (
  fechaInicial,
  fechaFinal,
  numeroReporte,
  pkClienteInicial
) => {
  if (numeroReporte) {
    return `SELECT * FROM rp_track_and_trace_framework.Bio_Factura WHERE UUID_Cliente = '${pkClienteInicial}' AND Numero ='${numeroReporte}' AND Estado = "Por_Pagar" ORDER BY fecha DESC`;
  } else if (fechaInicial && fechaFinal) {
    return `SELECT * FROM rp_track_and_trace_framework.Bio_Factura WHERE UUID_Cliente = '${pkClienteInicial}' AND (Fecha BETWEEN '${fechaInicial}' AND '${fechaFinal}') AND Estado = "Por_Pagar"  ORDER BY fecha DESC`;
  }
};

// exports.getReportesSaldos = (
//   fechaInicial,
//   fechaFinal,
//   numeroReporte,
//   pkClienteInicial
// ) => {
//   if (numeroReporte) {
//     return `SELECT rp_track_and_trace_framework.Bio_Factura.Direccion, rp_track_and_trace_framework.Bio_Pagos.Estado,rp_track_and_trace_framework.Bio_Factura.Numero, rp_track_and_trace_framework.Bio_Factura.Fecha, rp_track_and_trace_framework.Bio_Factura.Limite_Pago, rp_track_and_trace_framework.Bio_Factura.Valor, rp_track_and_trace_framework.Bio_Factura.Saldo FROM rp_track_and_trace_framework.Bio_Pagos right join rp_track_and_trace_framework.Bio_Factura on rp_track_and_trace_framework.Bio_Pagos.UUID_Factura = rp_track_and_trace_framework.Bio_Factura.UUID_Factura where Bio_Factura.UUID_Cliente = '${pkClienteInicial}' and rp_track_and_trace_framework.Bio_Factura.Estado <> 'Pagado'  and rp_track_and_trace_framework.Bio_Factura.Numero = '${numeroReporte}' ORDER BY Fecha DESC`;
//   } else if (fechaInicial && fechaFinal) {
//     return `SELECT rp_track_and_trace_framework.Bio_Factura.Direccion,rp_track_and_trace_framework.Bio_Pagos.Estado,rp_track_and_trace_framework.Bio_Factura.Numero, rp_track_and_trace_framework.Bio_Factura.Fecha, rp_track_and_trace_framework.Bio_Factura.Limite_Pago, rp_track_and_trace_framework.Bio_Factura.Valor, rp_track_and_trace_framework.Bio_Factura.Saldo FROM rp_track_and_trace_framework.Bio_Pagos right join rp_track_and_trace_framework.Bio_Factura on rp_track_and_trace_framework.Bio_Pagos.UUID_Factura = rp_track_and_trace_framework.Bio_Factura.UUID_Factura where Bio_Factura.UUID_Cliente = '${pkClienteInicial}' and rp_track_and_trace_framework.Bio_Factura.Estado <> 'Pagado'  and (rp_track_and_trace_framework.Bio_Factura.Fecha BETWEEN '${fechaInicial}' AND '${fechaFinal}') ORDER BY Fecha DESC`;
//   }
// };
