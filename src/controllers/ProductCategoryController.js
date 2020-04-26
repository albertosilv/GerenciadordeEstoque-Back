const Category = require('../models/category.model');
const Product = require('../models/product.model');

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
    const fileName = req.file ? req.file.filename : '';
    const { name, quantity, value } = req.body;
    const { categoryId } = req.params;

    try {
      const product = await Product.create({
        name,
        quantity,
        value,
        image: fileName,
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
