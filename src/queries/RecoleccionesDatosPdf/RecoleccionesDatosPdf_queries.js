exports.getRecoleccionesDatosPdf = (sede, numeroWorkPlan) => {
  return `
    SELECT primary_secondary,UUID_Sede,work_plan_detail_id,contact_name,contact_cc,residue_physical_state,work_plan_no, company_address, created_date, residue, confirmed_weight, confirmed_quantity, client_signature_timestamp  FROM rp_track_and_trace_framework.tbl_rp_tx_work_plan_details where UUID_Sede in ("${sede}") and work_plan_no = "${numeroWorkPlan}"
    `;
};
