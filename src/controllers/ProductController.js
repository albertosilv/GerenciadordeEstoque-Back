const Product = require('../models/Product');
const Category = require('../models/Category');
const getImagePath = require('../utils/getImagePath');

module.exports = {
  async create(req, res) {
    const { name, quantity, value } = req.body;
    const { categoryId } = req.params;

    const imagePath = await getImagePath(req);
    try {
      const product = await Product.create({
        name,
        quantity,
        value,
        image: imagePath,
      });
      await Category.findByIdAndUpdate(categoryId, {
        $push: {
          // eslint-disable-next-line no-underscore-dangle
          products: product._id,
        },
      });
      return res.status(201).json(product);
    } catch (error) {
      return res.status(400).json({ error });
    }
  },

  async show(req, res) {
    const { id } = req.params;
    try {
      const product = await Product.findById(id);

      return res.status(200).json(product);
    } catch (error) {
      return res.status(400).json({ error });
    }
  },

  async index(req, res) {
    try {
      const products = await Product.find({});

      return res.status(200).json(products);
    } catch (error) {
      return res.status(400).json({ error });
    }
  },

  async update(req, res) {
    const { id } = req.params;

    try {
      const product = await Product.findByIdAndUpdate(id, { $set: req.body });

      const imagePath = await getImagePath(req);
      if (imagePath !== '') {
        product.image = imagePath;
        await product.save();
      }

      return res.status(200).json(product);
    } catch (error) {
      return res.status(400).json({ error });
    }
  },
  async delete(req, res) {
    const { id } = req.params;
    try {
      await Product.findByIdAndRemove(id);
      return res.status(204).json();
    } catch (error) {
      return res.status(400).json({ error });
    }
  },
};
