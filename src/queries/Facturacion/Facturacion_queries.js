// SELECT * FROM rp_track_and_trace_framework.Bio_Factura WHERE UUID_Cliente = '69FAC0D0-4C43-7D44-8517-C4B842BF5533' AND (Fecha BETWEEN '2020-07-20 00:00:00' AND '2021-07-27 00:00:00') AND UUID_Factura ='6F79DBA4-492E-6042-9DAA-D4EA64B59194';

exports.getFacturasFechas = (fechaInicial, fechaFinal, pkCliente) => {

  return `SELECT * FROM rp_track_and_trace_framework.Bio_Factura WHERE UUID_Cliente = '${pkCliente}' AND (Fecha BETWEEN '${fechaInicial}' AND '${fechaFinal}')`;
};

exports.getFacturas = (fechaInicial, fechaFinal, pkCliente, factura) => {
  return `SELECT * FROM rp_track_and_trace_framework.Bio_Factura WHERE UUID_Cliente = '${pkCliente}' AND (Fecha BETWEEN '${fechaInicial}' AND '${fechaFinal}') AND Numero ='${factura}'`;
};

exports.getFactura = (pkCliente, factura) => {
  return `SELECT * FROM rp_track_and_trace_framework.Bio_Factura WHERE UUID_Cliente = '${pkCliente}' AND Numero ='${factura}'`;
};
