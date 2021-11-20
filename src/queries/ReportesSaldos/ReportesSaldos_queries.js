exports.getReportesSaldos = (
  fechaInicial,
  fechaFinal,
  numeroReporte,
  pkClienteInicial
) => {
  console.log(fechaInicial);
  console.log(fechaFinal);
  console.log(numeroReporte);
  console.log(pkClienteInicial);

  if (numeroReporte) {
    return `


SELECT rp_track_and_trace_framework.Bio_Pagos.Estado,rp_track_and_trace_framework.Bio_Factura.Numero, rp_track_and_trace_framework.Bio_Factura.Fecha, rp_track_and_trace_framework.Bio_Factura.Limite_Pago, rp_track_and_trace_framework.Bio_Factura.Valor, rp_track_and_trace_framework.Bio_Factura.Saldo FROM rp_track_and_trace_framework.Bio_Pagos right join rp_track_and_trace_framework.Bio_Factura on rp_track_and_trace_framework.Bio_Pagos.UUID_Factura = rp_track_and_trace_framework.Bio_Factura.UUID_Factura where Bio_Factura.UUID_Cliente = '${pkClienteInicial}' and rp_track_and_trace_framework.Bio_Factura.Estado <> 'Pagado'  and rp_track_and_trace_framework.Bio_Factura.Numero = '${numeroReporte}'

    `;
  } else if (fechaInicial && fechaFinal) {
    return `


SELECT rp_track_and_trace_framework.Bio_Pagos.Estado,rp_track_and_trace_framework.Bio_Factura.Numero, rp_track_and_trace_framework.Bio_Factura.Fecha, rp_track_and_trace_framework.Bio_Factura.Limite_Pago, rp_track_and_trace_framework.Bio_Factura.Valor, rp_track_and_trace_framework.Bio_Factura.Saldo FROM rp_track_and_trace_framework.Bio_Pagos right join rp_track_and_trace_framework.Bio_Factura on rp_track_and_trace_framework.Bio_Pagos.UUID_Factura = rp_track_and_trace_framework.Bio_Factura.UUID_Factura where Bio_Factura.UUID_Cliente = '${pkClienteInicial}' and rp_track_and_trace_framework.Bio_Factura.Estado <> 'Pagado'  and (rp_track_and_trace_framework.Bio_Factura.Fecha BETWEEN '${fechaInicial}' AND '${fechaFinal}')

    `;
  }
};
