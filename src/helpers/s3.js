// const aws = require("aws-sdk");

// const awsConfig = {
//   region: "us-east-1",
// };

// const s3 = new aws.S3(awsConfig);
// const { FILES_BUCKET, USER_ID, USER_SECRET } = process.env;

// // console.log(FILES_BUCKET);
// // console.log(USER_ID);
// // console.log(USER_SECRET);

// async function generateFileUrl(file, contentType, fileName) {
//   const buf = Buffer.from(
//     file.replace(/^data:image\/\w+;base64,/, ""),
//     "base64"
//   );
//   const params = {
//     Bucket: FILES_BUCKET,
//     // Bucket: "filesbucket1",
//     Body: buf,
//     Key: fileName,
//     ContentType: contentType,
//     ContentEncoding: "base64",
//   };

//   console.log(params);
//   console.log(`Saving file like ${fileName}`);
//   const putRes = await s3.putObject(params).promise();
//   console.log("Saving operation result", JSON.stringify(putRes));

//   // const s3Signer = new aws.S3({
//   //   accessKeyId: USER_ID,
//   //   secretAccessKey: USER_SECRET,
//   // });

//   // const params2 = {
//   //   Bucket: FILES_BUCKET,
//   //   Key: fileName,
//   //   Expires: 604800,
//   // };
//   // console.log(`Generating link for pdf for ${fileName}`);

//   // return s3Signer.getSignedUrlPromise("getObject", params2);
// }

// module.exports = {
//   generateFileUrl,
// };
