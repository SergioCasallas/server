exports.getCertificados = (
  fechaInicial,
  fechaFinal,
  UUIDSedes,
  certificado
) => {
  return `SELECT * FROM rp_track_and_trace_framework.Bio_Facturacion_Detalles where rp_track_and_trace_framework.Bio_Facturacion_Detalles.ID is not null AND (Residuo = 'Biosanitarios'OR Residuo = 'Cortopunzantes'OR Residuo = 'Anatomopatologicos'OR Residuo = 'Animales'OR Residuo = 'Medicamentos o Fármacos'OR Residuo = 'COLCHON O COLCHONETA'OR Residuo = 'FARMACOS'OR Residuo = 'Biosanitarios VacCovid19'OR Residuo = 'Cortopunzantes VacCovid19'OR Residuo = 'Medicamentos VacCovid19'OR Residuo = 'Farmacos VacCovid19' ) ${
    fechaInicial && fechaFinal
      ? `AND (Fecha_Recoleccion BETWEEN '${fechaInicial}' AND '${fechaFinal}')`
      : ""
  } ${
    UUIDSedes
      ? `AND UUID_Sede IN (${UUIDSedes.map((item) => `"${item.UUID}"`)})`
      : ""
  } ${certificado !== null ? `AND Factura="${certificado}"` : ""}`;
};

exports.getUUIDFactura = (UUID_Factura) => {
  return `SELECT * FROM rp_track_and_trace_framework.Bio_Facturacion_Detalles
where rp_track_and_trace_framework.Bio_Facturacion_Detalles.ID is not null
AND (Residuo = 'Biosanitarios'
OR Residuo = 'Cortopunzantes'
OR Residuo = 'Anatomopatologicos'
OR Residuo = 'Animales'
OR Residuo = 'Medicamentos o Fármacos'
OR Residuo = 'COLCHON O COLCHONETA'
OR Residuo = 'FARMACOS'
OR Residuo = 'Biosanitarios VacCovid19'
OR Residuo = 'Cortopunzantes VacCovid19'
OR Residuo = 'Medicamentos VacCovid19'
OR Residuo = 'Farmacos VacCovid19' )
AND UUID_Factura = "${UUID_Factura}"`;
};
