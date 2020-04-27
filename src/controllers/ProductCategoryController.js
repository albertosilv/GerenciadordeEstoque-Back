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
    const { name, quantity, value } = req.body;
    const { categoryId } = req.params;

    try {
      const product = await Product.create({
        name,
        quantity,
        value,
      });
      await Category.findByIdAndUpdate(categoryId, {
        $push: {
          products: product._id,
        },
      });

      if (req.file) {
        cloudinary.uploader.upload(req.file.path, async (error, result) => {
          if (error) return res.status(400).json(error);
          product.image = result.secure_url;
          await product.save();
        });
      }

      return res.status(201).json(product);
    } catch (error) {
      return res.status(400).json(error);
    }
  },
};
