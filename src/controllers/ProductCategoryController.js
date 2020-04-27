const cloudinary = require('cloudinary').v2;
const Category = require('../models/category.model');
const Product = require('../models/product.model');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

module.exports = {
  async index(req, res) {
    try {
      const categories = await Category.find({}).populate('products');

      return res.status(200).json(categories);
    } catch (error) {
      return res.status(400).json(error);
    }
  },
  async create(req, res) {
    let image = '';
    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path);
      image = result.secure_url;
    }
    const { name, quantity, value } = req.body;
    const { categoryId } = req.params;

    try {
      const product = await Product.create({
        name,
        quantity,
        value,
        image,
      });
      await Category.findByIdAndUpdate(categoryId, {
        $push: {
          products: product._id,
        },
      });
      return res.status(201).json(product);
    } catch (error) {
      return res.status(400).json(error);
    }
  },
};
