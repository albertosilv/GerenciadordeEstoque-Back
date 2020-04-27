const cloudinary = require('cloudinary').v2;
const cloudinaryConfig = require('../config/cloudinary');

cloudinary.config(cloudinaryConfig);

const getImagePath = async (request) => {
  let imagePath = '';
  if (request.file) {
    const response = await cloudinary.uploader.upload(request.file.path);
    imagePath = response.secure_url;
  }
  return imagePath;
};

module.exports = getImagePath;
