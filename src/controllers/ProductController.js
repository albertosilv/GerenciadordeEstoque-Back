const cloudinary = require('cloudinary').v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
const Product = require('../models/Product');
const Category = require('../models/Category');

module.exports = {
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
          // eslint-disable-next-line no-underscore-dangle
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

  async show(req, res) {
    const { id } = req.params;
    try {
      const product = await Product.findById(id);

      return res.status(200).json(product);
    } catch (error) {
      return res.status(400).json(error);
    }
  },

  async index(req, res) {
    try {
      const products = await Product.find({});

      return res.status(200).json(products);
    } catch (error) {
      return res.status(400).json(error);
    }
  },

  async update(req, res) {
    const { id } = req.params;
    try {
      const product = await Product.findByIdAndUpdate(id, { $set: req.body });

      return res.status(200).json(product);
    } catch (error) {
      return res.status(400).json(error);
    }
  },
  async delete(req, res) {
    const { id } = req.params;
    try {
      await Product.findByIdAndRemove(id);
      return res.status(204).json();
    } catch (error) {
      return res.status(400).json(error);
    }
  },
};
