exports.getRecoleccionesDatosPdf = (sede, fechaInicial, fechaFinal) => {
  return `
  SELECT primary_secondary,UUID_Sede,work_plan_detail_id,contact_name,contact_cc,residue_physical_state,work_plan_no, company_address, created_date, residue, confirmed_weight, confirmed_quantity, client_signature_timestamp,
  SUM(IF(residue = "Biosanitarios",confirmed_weight,0))  as totalesBiosanitarios,
  SUM(IF(residue = "Anatomopatologicos",confirmed_weight,0))  as totalesAnatomopatologicos,
  SUM(IF(residue = "Cortopunzantes",confirmed_weight,0))  as totalesCortopunzantes,
  SUM(IF(residue = "Animales",confirmed_weight,0))  as totalesAnimales,
  SUM(IF(residue = "COLCHON O COLCHONETA",confirmed_weight,0))  as totalesCOLCHONOCOLCHONETA,
  SUM(IF(residue = "Biosanitarios VacCovid19",confirmed_weight,0))  as totalesBiosanitariosVacCovid19,
  SUM(IF(residue = "Cortopunzantes VacCovid19",confirmed_weight,0))  as totalesCortopunzantesVacCovid19,
  SUM(IF(residue = "BIOSANITARIOS COVID19",confirmed_weight,0))  as totalesBIOSANITARIOSCOVID19,
  SUM(IF(residue = "Medicamentos o Fármacos",confirmed_weight,0))  as totalesMedicamentosoFármacos,
  SUM(IF(residue = "Reactivos",confirmed_weight,0))  as totalesReactivos,
  SUM(IF(residue = "Metales Pesados (Luminarías,Baterías,Amalgamas)",confirmed_weight,0))  as totalesMetalesPesadosLuminaríasBateríasAmalgamas,
  SUM(IF(residue = "LIQUIDOS REVELADORES O FIJADORES",confirmed_weight,0))  as totalesLIQUIDOSREVELADORESOFIJADORES,
  SUM(IF(residue = "METALES PESADOS (PLOMO)",confirmed_weight,0))  as totalesMETALESPESADOSPLOMO,
  SUM(IF(residue = "FARMACOS",confirmed_weight,0))  as totalesFARMACOS,
  SUM(IF(residue = "LAMPARAS O LUMINARIAS",confirmed_weight,0))  as totalesLAMPARASOLUMINARIAS,
  SUM(IF(residue = "CITOTOXICO",confirmed_weight,0))  as totalesCITOTOXICO,
  SUM(IF(residue = "Medicamentos VacCovid19",confirmed_weight,0))  as totalesMedicamentosVacCovid19,
  SUM(IF(residue = "Farmacos VacCovid19",confirmed_weight,0))  as totalesFarmacosVacCovid19,
  SUM(IF(residue = "Aceites usados, Lodos Aceitodos,borras,pinturas,estopa,Mezcla de hidrocarburos y/o aceite",confirmed_weight,0))  as totalesAceitesusadosLodosAceitodosborraspinturasestopaMezcladehidrocarburosyoaceite,
  SUM(IF(residue = "Mezclas y emulsiones de desechos de aceite y agua o derhidrocarburos y agua",confirmed_weight,0))  as totalesMezclasyemulsionesdedesechosdeaceiteyaguaoderhidrocarburosyagua,
  SUM(IF(residue = "LODOS, BORAS O ESTOPAS",confirmed_weight,0))  as totalesLODOSBORASOESTOPAS,
  SUM(IF(residue = "RES. HOSP PELIGROSO Q",confirmed_weight,0))  as totalesRESHOSPPELIGROSOQ,
  SUM(IF(residue = "RES. HOSP PELIGROSO L",confirmed_weight,0))  as totalesRESHOSPPELIGROSOL,
  SUM(IF(residue = "RES. HOSP PELIGROSO R",confirmed_weight,0))  as totalesRESHOSPPELIGROSOR,
  SUM(IF(residue = "RES. HOSP PELIGROSO I",confirmed_weight,0))  as totalesRESHOSPPELIGROSOI,
  SUM(IF(residue = "Ordinarios, reciclables",confirmed_weight,0))  as totalesOrdinariosreciclables FROM rp_track_and_trace_framework.tbl_rp_tx_work_plan_details where UUID_Sede in ("${sede}") AND client_signature_timestamp BETWEEN "${fechaInicial}" AND "${fechaFinal}"
  `;
};


exports.getRecoleccionesDatos = (
  sede,
  fechaInicial,
  fechaFinal,
  numeroWorkPlan
) => {
  return `

   SELECT primary_secondary,UUID_Sede,work_plan_detail_id,contact_name,contact_cc,residue_physical_state,work_plan_no, company_address, created_date, residue, confirmed_weight, confirmed_quantity, client_signature_timestamp  FROM rp_track_and_trace_framework.tbl_rp_tx_work_plan_details where UUID_Sede in ("${sede}") and work_plan_no = "${numeroWorkPlan}"

  `;
};