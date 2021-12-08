export const pdfGenerator = async (event) => {
  try {
    let payload = event;
    let transform_payload = transform_inputs(payload);

    // template bucket details
    let template_s3_bucket =
      transform_payload.template_s3_bucket_details.BUCKET_NAME;
    let template_s3_key =
      transform_payload.template_s3_bucket_details.OBJECT_KEY;

    // Bucket details for storing PDF generated
    let pdf_bucket = transform_payload.pdf_s3_bucket_details.BUCKET_NAME;
    let pdf_file_info = transform_payload.pdf_s3_bucket_details.PDF_FILE_INFO;
    let pdf_file_path = pdf_file_info.PATH;

    if (
      pdf_file_path &&
      pdf_file_path.split(".").length > 1 &&
      !pdf_file_path.endsWith(OUTPUT_PDF_NAME_POSTFIX)
    ) {
      console.log("Incorrect pdf file extension");
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Incorrect pdf file extension" }),
      };
    }
    if (pdf_file_path && pdf_file_path.split(".").length == 1) {
      pdf_file_path = pdf_file_path + OUTPUT_PDF_NAME_POSTFIX;
    }
    let pdf_generation_options = pdf_file_info.PDF_GENERATION_OPTION;
    let pdf_upload_extra_args = pdf_file_info.PDF_UPLOAD_EXTRA_ARGS;
    // Dynamic data for rendering PDF
    let render_data = transform_payload.template_dynamic_data;

    // Data for queuing purpose
    let version = transform_payload.version;
    let resource_lock_id = transform_payload.resource_lock_id;

    // template Object
    let Data = await s3
      .getObject({ Bucket: template_s3_bucket, Key: template_s3_key })
      .promise();

    // Body will be a buffer type so need to convert it to string before converting to pdf
    let html = Data.Body.toString();
    let template = nunjucks.compile(html);
    // Dynamic data rendered into the template
    let content = template.render(render_data);
    let options = OUT_PDF_OPTIONS;
    if (pdf_generation_options && Object.keys(pdf_generation_options).length) {
      options = pdf_generation_options;
    }
    // PDF generation
    let file = await exportHtmlToPdf(content, options);

    // PDF upload to s3
    let upload_args = PDF_UPLOAD_ARGS;
    if (pdf_upload_extra_args && Object.keys(pdf_upload_extra_args).length) {
      upload_args = pdf_upload_extra_args;
    }
    upload_args.Bucket = pdf_bucket;
    upload_args.Key = pdf_file_path;
    upload_args.Body = file;
    let file_upload_data = await s3.upload(upload_args).promise();

    // Response formatting
    let message = "";
    let url = "";
    let status;
    if (file_upload_data.Location) {
      status = 200;
      url = file_upload_data.Location;
      message = "PDF generated successfully";
    } else {
      status = 400;
      url = "";
      message = "Error in generating pdf";
    }
    let response_message = {
      message: message,
      version: version,
      resource_lock_id: resource_lock_id,
    };
    let body = { message: response_message, url: url };
    return {
      statusCode: status,
      body: JSON.stringify(body),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify(error),
    };
  }
};
