exports.getReportesPagos = (
  numeroReporte,
  fechaInicial,
  fechaFinal,
  pkClienteInicial
) => {

  if (numeroReporte) {
    return `SELECT rp_track_and_trace_framework.Bio_Pagos.Tipo_Pago,rp_track_and_trace_framework.Bio_Pagos.Saldo, rp_track_and_trace_framework.Bio_Pagos.Estado,rp_track_and_trace_framework.Bio_Pagos.Recibo,  rp_track_and_trace_framework.Bio_Pagos.Cuenta,  rp_track_and_trace_framework.Bio_Pagos.Metodo_Pago ,rp_track_and_trace_framework.Bio_Factura.Numero, rp_track_and_trace_framework.Bio_Factura.IVA_Cliente, rp_track_and_trace_framework.Bio_Factura.Valor_Bruto, rp_track_and_trace_framework.Bio_Factura.Valor, rp_track_and_trace_framework.Bio_Factura.Valor_IVA,  rp_track_and_trace_framework.Bio_Factura.Otros ,rp_track_and_trace_framework.Bio_Factura.ICA , rp_track_and_trace_framework.Bio_Factura.Fecha, rp_track_and_trace_framework.Bio_Pagos.Fecha_Pago, rp_track_and_trace_framework.Bio_Pagos.Neto, rp_track_and_trace_framework.Bio_Factura.Retefuente FROM rp_track_and_trace_framework.Bio_Pagos join rp_track_and_trace_framework.Bio_Factura on rp_track_and_trace_framework.Bio_Pagos.UUID_Factura = rp_track_and_trace_framework.Bio_Factura.UUID_Factura where rp_track_and_trace_framework.Bio_Factura.Numero = "${numeroReporte}" and Bio_Factura.UUID_Cliente = "${pkClienteInicial}" ORDER BY Fecha DESC`;
  } else if (fechaInicial && fechaFinal) {
    return `SELECT rp_track_and_trace_framework.Bio_Pagos.Tipo_Pago, rp_track_and_trace_framework.Bio_Pagos.Saldo, rp_track_and_trace_framework.Bio_Pagos.Estado,rp_track_and_trace_framework.Bio_Pagos.Recibo,  rp_track_and_trace_framework.Bio_Pagos.Cuenta,  rp_track_and_trace_framework.Bio_Pagos.Metodo_Pago ,rp_track_and_trace_framework.Bio_Factura.Numero, rp_track_and_trace_framework.Bio_Factura.IVA_Cliente, rp_track_and_trace_framework.Bio_Factura.Valor_Bruto, rp_track_and_trace_framework.Bio_Factura.Valor, rp_track_and_trace_framework.Bio_Factura.Valor_IVA,  rp_track_and_trace_framework.Bio_Factura.Otros ,rp_track_and_trace_framework.Bio_Factura.ICA , rp_track_and_trace_framework.Bio_Factura.Fecha, rp_track_and_trace_framework.Bio_Pagos.Fecha_Pago, rp_track_and_trace_framework.Bio_Pagos.Neto, rp_track_and_trace_framework.Bio_Factura.Retefuente FROM rp_track_and_trace_framework.Bio_Pagos join rp_track_and_trace_framework.Bio_Factura on rp_track_and_trace_framework.Bio_Pagos.UUID_Factura = rp_track_and_trace_framework.Bio_Factura.UUID_Factura  where Bio_Factura.UUID_Cliente = "${pkClienteInicial}" and rp_track_and_trace_framework.Bio_Pagos.Fecha_Pago BETWEEN "${fechaInicial}" AND "${fechaFinal}" ORDER BY Fecha DESC`;
  } else {
    return [{ mensaje: "error Error error" }];
  }
};
