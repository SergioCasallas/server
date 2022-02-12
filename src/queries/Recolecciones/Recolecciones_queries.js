exports.getRecoleccionesResidues = (
  UUIDSede,
  fechaInicial,
  fechaFinal,
  residue
) => {
  if (
    residue &&
    typeof UUIDSede !== "string" &&
    UUIDSede.length > 0 &&
    (fechaInicial, fechaFinal)
  ) {
    return `SELECT UUID_Sede,primary_secondary,work_plan_detail_id,contact_name,contact_cc,residue_physical_state,work_plan_no, company_address, created_date, residue, confirmed_weight, confirmed_quantity  FROM rp_track_and_trace_framework.tbl_rp_tx_work_plan_details where UUID_Sede in (${UUIDSede.map(
      (item) => `"${item.UUID}"`
    )}) AND (client_signature_timestamp BETWEEN "${fechaInicial}" AND "${fechaFinal}")  AND residue = "${residue}"  ORDER BY created_date DESC `;
  } else if (residue && (fechaInicial, fechaFinal) && UUIDSede) {
    return `SELECT UUID_Sede,primary_secondary,work_plan_detail_id,contact_name,contact_cc,residue_physical_state,work_plan_no, company_address, created_date, residue, confirmed_weight, confirmed_quantity  FROM rp_track_and_trace_framework.tbl_rp_tx_work_plan_details where UUID_Sede in ("${UUIDSede}") AND (client_signature_timestamp BETWEEN "${fechaInicial}" AND "${fechaFinal}")  AND residue = "${residue}"   ORDER BY created_date DESC `;
  } else if (residue && UUIDSede.length > 0 && typeof UUIDSede !== "string") {
    return `SELECT UUID_Sede,primary_secondary,work_plan_detail_id,contact_name,contact_cc,residue_physical_state,work_plan_no, company_address, created_date, residue, confirmed_weight, confirmed_quantity  FROM rp_track_and_trace_framework.tbl_rp_tx_work_plan_details where UUID_Sede in (${UUIDSede.map(
      (item) => `"${item.UUID}"`
    )})   AND residue = "${residue}"   ORDER BY created_date DESC `;
  } else {
    return `SELECT UUID_Sede,primary_secondary,work_plan_detail_id,contact_name,contact_cc,residue_physical_state,work_plan_no, company_address, created_date, residue, confirmed_weight, confirmed_quantity  FROM rp_track_and_trace_framework.tbl_rp_tx_work_plan_details where UUID_Sede in ("${UUIDSede}") AND residue = "${residue}"   ORDER BY created_date DESC `;
  }
};


exports.getRecolecciones = (UUIDSede) => {
  if (typeof UUIDSede !== "string") {
    return `SELECT UUID_Sede,primary_secondary,work_plan_detail_id,contact_name,contact_cc,residue_physical_state,work_plan_no, company_address, created_date, residue, confirmed_weight, confirmed_quantity  FROM rp_track_and_trace_framework.tbl_rp_tx_work_plan_details where UUID_Sede in (${UUIDSede.map(
      (item) => `"${item.UUID}"`
    )})   ORDER BY created_date DESC  `;
  } else {
    return `SELECT UUID_Sede,primary_secondary,work_plan_detail_id,contact_name,contact_cc,residue_physical_state,work_plan_no, company_address, created_date, residue, confirmed_weight, confirmed_quantity  FROM rp_track_and_trace_framework.tbl_rp_tx_work_plan_details where UUID_Sede in ("${UUIDSede}")    ORDER BY created_date DESC`;
  }
};


exports.getRecoleccionesFechas = (UUIDSede, fechaInicial, fechaFinal) => {
  if (typeof UUIDSede !== "string") {
    return `SELECT UUID_Sede,primary_secondary,work_plan_detail_id,contact_name,contact_cc,residue_physical_state,work_plan_no, company_address, created_date, residue, confirmed_weight, confirmed_quantity  FROM rp_track_and_trace_framework.tbl_rp_tx_work_plan_details where UUID_Sede in (${UUIDSede.map(
      (item) => `"${item.UUID}"`
    )}) AND (client_signature_timestamp BETWEEN "${fechaInicial}" AND "${fechaFinal}")   ORDER BY created_date DESC`;
  } else {
    return `SELECT UUID_Sede,primary_secondary,work_plan_detail_id,contact_name,contact_cc,residue_physical_state,work_plan_no, company_address, created_date, residue, confirmed_weight, confirmed_quantity  FROM rp_track_and_trace_framework.tbl_rp_tx_work_plan_details where UUID_Sede in ("${UUIDSede}") AND (client_signature_timestamp BETWEEN "${fechaInicial}" AND "${fechaFinal}")   ORDER BY created_date DESC `;
  }
};

exports.getRecoleccionesWorkPlan = (numeroReporte, UUIDSede) => {
  if (typeof UUIDSede !== "string") {
    return `SELECT UUID_Sede,primary_secondary,work_plan_detail_id,contact_name,contact_cc,residue_physical_state,work_plan_no, company_address, created_date, residue, confirmed_weight, confirmed_quantity  FROM rp_track_and_trace_framework.tbl_rp_tx_work_plan_details where work_plan_no='${numeroReporte}' and UUID_Sede in (${UUIDSede.map(
      (item) => `"${item.UUID}"`
    )})   ORDER BY created_date DESC `;
  } else {
    return `SELECT UUID_Sede,primary_secondary,work_plan_detail_id,contact_name,contact_cc,residue_physical_state,work_plan_no, company_address, created_date, residue, confirmed_weight, confirmed_quantity  FROM rp_track_and_trace_framework.tbl_rp_tx_work_plan_details where  work_plan_no='${numeroReporte}' and UUID_Sede in ("${UUIDSede}") ORDER BY created_date DESC `;
  }
};


// confirmed_weight