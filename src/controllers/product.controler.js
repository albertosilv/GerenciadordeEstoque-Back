const Product = require('../models/product.model');

module.exports = {
  async create(req, res) {
    const { name, quantity, value } = req.body;

    try {
      const product = await Product.create({ name, quantity, value });

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
