// exports.getRecoleccionesResidues = (
//   UUIDSede,
//   fechaInicial,
//   fechaFinal,
//   residue
// ) => {
//   if (
//     residue &&
//     typeof UUIDSede !== "string" &&
//     UUIDSede.length > 0 &&
//     (fechaInicial, fechaFinal)
//   ) {
//     return `SELECT UUID_Sede,company_name,primary_secondary,work_plan_detail_id,contact_name,contact_cc,residue_physical_state,work_plan_no, company_address, client_signature_timestamp , residue, confirmed_weight, confirmed_quantity  FROM rp_track_and_trace_framework.tbl_rp_tx_work_plan_details where UUID_Sede in (${UUIDSede.map(
//       (item) => `"${item.UUID}"`
//     )}) AND (created_date  BETWEEN "${fechaInicial}" AND "${fechaFinal}")  AND residue = "${residue}"  ORDER BY work_plan_no   DESC `;
//   } else if (residue && (fechaInicial, fechaFinal) && UUIDSede) {
//     return `SELECT UUID_Sede,company_name,primary_secondary,work_plan_detail_id,contact_name,contact_cc,residue_physical_state,work_plan_no, company_address, client_signature_timestamp , residue, confirmed_weight, confirmed_quantity  FROM rp_track_and_trace_framework.tbl_rp_tx_work_plan_details where UUID_Sede in ("${UUIDSede}") AND (created_date  BETWEEN "${fechaInicial}" AND "${fechaFinal}")  AND residue = "${residue}"   ORDER BY work_plan_no   DESC `;
//   } else if (residue && UUIDSede.length > 0 && typeof UUIDSede !== "string") {
//     return `SELECT UUID_Sede,company_name,primary_secondary,work_plan_detail_id,contact_name,contact_cc,residue_physical_state,work_plan_no, company_address, client_signature_timestamp , residue, confirmed_weight, confirmed_quantity  FROM rp_track_and_trace_framework.tbl_rp_tx_work_plan_details where UUID_Sede in (${UUIDSede.map(
//       (item) => `"${item.UUID}"`
//     )})   AND residue = "${residue}"   ORDER BY work_plan_no   DESC `;
//   } else {
//     return `SELECT UUID_Sede,company_name,primary_secondary,work_plan_detail_id,contact_name,contact_cc,residue_physical_state,work_plan_no, company_address, client_signature_timestamp , residue, confirmed_weight, confirmed_quantity  FROM rp_track_and_trace_framework.tbl_rp_tx_work_plan_details where UUID_Sede in ("${UUIDSede}") AND residue = "${residue}"   ORDER BY work_plan_no   DESC `;
//   }
// };


exports.getRecolecciones = (UUIDSede) => {
  if (typeof UUIDSede !== "string") {
    return `SELECT UUID_Sede,company_name,primary_secondary,work_plan_detail_id,contact_name,contact_cc,residue_physical_state,work_plan_no, company_address, client_signature_timestamp , residue, confirmed_weight, confirmed_quantity  FROM rp_track_and_trace_framework.tbl_rp_tx_work_plan_details where UUID_Sede in (${UUIDSede.map(
      (item) => `"${item.UUID}"`
    )}) AND (confirmed_weight IS NOT NULL) ORDER BY work_plan_no DESC,company_name ASC,company_name ASC,company_name ASC  `;
  } else {
    return `SELECT UUID_Sede,company_name,primary_secondary,work_plan_detail_id,contact_name,contact_cc,residue_physical_state,work_plan_no, company_address, client_signature_timestamp , residue, confirmed_weight, confirmed_quantity  FROM rp_track_and_trace_framework.tbl_rp_tx_work_plan_details where UUID_Sede in ("${UUIDSede}") AND (confirmed_weight IS NOT NULL) ORDER BY work_plan_no DESC,company_name ASC,company_name ASC`;
  }
};


exports.getRecoleccionesFechas = (UUIDSede, fechaInicial, fechaFinal) => {
  if (typeof UUIDSede !== "string") {
    return `SELECT UUID_Sede,company_name,primary_secondary,work_plan_detail_id,contact_name,contact_cc,residue_physical_state,work_plan_no, company_address, client_signature_timestamp , residue, confirmed_weight, confirmed_quantity  FROM rp_track_and_trace_framework.tbl_rp_tx_work_plan_details where UUID_Sede in (${UUIDSede.map(
      (item) => `"${item.UUID}"`
    )}) AND (created_date  BETWEEN "${fechaInicial}" AND "${fechaFinal}") AND (confirmed_weight IS NOT NULL) ORDER BY work_plan_no DESC,company_name ASC`;
  } else {
    return `SELECT UUID_Sede,company_name,primary_secondary,work_plan_detail_id,contact_name,contact_cc,residue_physical_state,work_plan_no, company_address, client_signature_timestamp , residue, confirmed_weight, confirmed_quantity  FROM rp_track_and_trace_framework.tbl_rp_tx_work_plan_details where UUID_Sede in ("${UUIDSede}") AND (created_date  BETWEEN "${fechaInicial}" AND "${fechaFinal}") AND (confirmed_weight IS NOT NULL)  ORDER BY work_plan_no DESC,company_name ASC`;
  }
};

exports.getRecoleccionesWorkPlan = (numeroReporte, UUIDSede) => {
  if (typeof UUIDSede !== "string") {
    return `SELECT UUID_Sede,company_name,primary_secondary,work_plan_detail_id,contact_name,contact_cc,residue_physical_state,work_plan_no, company_address, client_signature_timestamp , residue, confirmed_weight, confirmed_quantity  FROM rp_track_and_trace_framework.tbl_rp_tx_work_plan_details where work_plan_no='${numeroReporte}' and UUID_Sede in (${UUIDSede.map(
      (item) => `"${item.UUID}"`
    )}) AND (confirmed_weight IS NOT NULL) ORDER BY work_plan_no DESC,company_name ASC`;
  } else {
    return `SELECT UUID_Sede,company_name,primary_secondary,work_plan_detail_id,contact_name,contact_cc,residue_physical_state,work_plan_no, company_address, client_signature_timestamp , residue, confirmed_weight, confirmed_quantity  FROM rp_track_and_trace_framework.tbl_rp_tx_work_plan_details where  work_plan_no='${numeroReporte}' and UUID_Sede in ("${UUIDSede}") AND (confirmed_weight IS NOT NULL) ORDER BY work_plan_no DESC,company_name ASC`;
  }
};


// confirmed_weight