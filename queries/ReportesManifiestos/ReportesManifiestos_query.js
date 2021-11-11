exports.getReportesManifiestos = (datos) => {
  const { numeroReporte, UUIDSede } = datos;
  if (numeroReporte && UUIDSede) {
    return `
SELECT rp_track_and_trace_framework.tbl_rp_tx_work_plan_details.client_signature_timestamp, rp_track_and_trace_framework.tbl_rp_tx_work_plan_details.UUID_Sede, rp_track_and_trace_framework.tbl_rp_tx_work_plan.number_plate , rp_track_and_trace_framework.tbl_rp_tx_work_plan_details.destroy_buckets, rp_track_and_trace_framework.tbl_rp_tx_work_plan_details.company_name,rp_track_and_trace_framework.tbl_rp_tx_work_plan_details.primary_secondary, rp_track_and_trace_framework.tbl_rp_tx_work_plan_details.company_address, rp_track_and_trace_framework.tbl_rp_tx_work_plan_details.work_plan_detail_id, rp_track_and_trace_framework.tbl_rp_tx_work_plan_details.residue_type, rp_track_and_trace_framework.tbl_rp_tx_work_plan_details.residue, rp_track_and_trace_framework.tbl_rp_tx_work_plan_details.confirmed_weight, rp_track_and_trace_framework.tbl_rp_tx_work_plan_details.confirmed_quantity, rp_track_and_trace_framework.tbl_rp_tx_work_plan_details.package, rp_track_and_trace_framework.tbl_rp_tx_work_plan_details.observations, rp_track_and_trace_framework.tbl_rp_tx_work_plan_details.photo_1_path, rp_track_and_trace_framework.tbl_rp_tx_work_plan_details.photo_2_path, rp_track_and_trace_framework.tbl_rp_tx_work_plan_details.photo_3_path, rp_track_and_trace_framework.tbl_rp_tx_work_plan_details.photo_4_path, rp_track_and_trace_framework.tbl_rp_tx_work_plan_details.contact_name, rp_track_and_trace_framework.tbl_rp_tx_work_plan_details.contact_cc, rp_track_and_trace_framework.tbl_rp_tx_work_plan_details.client_signature, rp_track_and_trace_framework.tbl_rp_tx_work_plan.driver_name, rp_track_and_trace_framework.tbl_rp_tx_work_plan.driver_id, rp_track_and_trace_framework.tbl_rp_tx_work_plan.driver_signature_path
FROM rp_track_and_trace_framework.tbl_rp_tx_work_plan_details join rp_track_and_trace_framework.tbl_rp_tx_work_plan on rp_track_and_trace_framework.tbl_rp_tx_work_plan_details.work_plan_no = rp_track_and_trace_framework.tbl_rp_tx_work_plan.work_plan_number
where rp_track_and_trace_framework.tbl_rp_tx_work_plan_details.work_plan_no = '${numeroReporte}' and rp_track_and_trace_framework.tbl_rp_tx_work_plan_details.UUID_Sede ='${UUIDSede} '

    `;
  }
};
