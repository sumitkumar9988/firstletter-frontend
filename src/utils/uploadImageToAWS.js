const { v4: uuidv4 } = require('uuid');
const AWS = require('aws-sdk');

const s3 = new AWS.S3({
  accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
});

const uploadSingleImage = async (file, setImage, setimageLoading) => {
  if (!file) {
    return;
  }
  let myFile = file.name.split('.');
  const fileType = myFile[myFile.length - 1];

  const params = {
    Bucket: process.env.REACT_APP_BUCKET_NAME,
    Key: `${uuidv4()}.${fileType}`,
    Body: file,
  };

  s3.upload(params, (error, data) => {
    if (error) {
      console.error(error);
      setimageLoading(false);
      return;
    }
    console.log(data.Location);
    setImage(data.Location);
    setimageLoading(false);
  });
};

export default uploadSingleImage;
