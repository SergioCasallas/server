exports.getReportesPagos = (
  numeroReporte,
  fechaInicial,
  fechaFinal,
  pkClienteInicial
) => {
  console.log(numeroReporte);
  console.log(fechaInicial);
  console.log(fechaFinal);
  console.log(pkClienteInicial);
  if (numeroReporte) {
    return `

    SELECT rp_track_and_trace_framework.Bio_Pagos.Estado, rp_track_and_trace_framework.Bio_Pagos.Metodo_Pago, rp_track_and_trace_framework.Bio_Pagos.Recibo, rp_track_and_trace_framework.Bio_Pagos.Cuenta, rp_track_and_trace_framework.Bio_Pagos.Fecha_Pago, rp_track_and_trace_framework.Bio_Factura.Numero, rp_track_and_trace_framework.Bio_Factura.Fecha, rp_track_and_trace_framework.Bio_Factura.Valor, rp_track_and_trace_framework.Bio_Pagos.Saldo  FROM rp_track_and_trace_framework.Bio_Pagos join rp_track_and_trace_framework.Bio_Factura on rp_track_and_trace_framework.Bio_Pagos.UUID_Factura = rp_track_and_trace_framework.Bio_Factura.UUID_Factura where rp_track_and_trace_framework.Bio_Factura.Numero = '${numeroReporte}' and Bio_Factura.UUID_Cliente = '${pkClienteInicial}'

    `;
  } else if (fechaInicial && fechaFinal) {
    return `

SELECT rp_track_and_trace_framework.Bio_Pagos.Estado, rp_track_and_trace_framework.Bio_Pagos.Metodo_Pago, rp_track_and_trace_framework.Bio_Pagos.Recibo, rp_track_and_trace_framework.Bio_Pagos.Cuenta, rp_track_and_trace_framework.Bio_Pagos.Fecha_Pago, rp_track_and_trace_framework.Bio_Factura.Numero, rp_track_and_trace_framework.Bio_Factura.Fecha, rp_track_and_trace_framework.Bio_Factura.Valor, rp_track_and_trace_framework.Bio_Pagos.Saldo  FROM rp_track_and_trace_framework.Bio_Pagos join rp_track_and_trace_framework.Bio_Factura on rp_track_and_trace_framework.Bio_Pagos.UUID_Factura = rp_track_and_trace_framework.Bio_Factura.UUID_Factura where rp_track_and_trace_framework.Bio_Factura.Fecha BETWEEN '${fechaInicial}' AND '${fechaFinal}'  and  Bio_Factura.UUID_Cliente = '${pkClienteInicial}'
    `;
  } else {
    return [{ mensaje: "error Error error" }];
  }
};
