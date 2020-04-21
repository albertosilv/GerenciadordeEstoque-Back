const multer = require('multer');

const Category = require('../models/category.model');
const Product = require('../models/product.model');

module.exports = {
  index(req, res) {
    Category.find({}).populate('products')
      .then((categories) => res.status(200).json(categories))
      .catch((error) => res.status(400).json(error));
  },
  store(req, res) {
    let fileName;
    if (req.file) {
      fileName = req.file.filename;
    } else {
      fileName = '';
    }
    const { name, quantity, value } = req.body;
    const { categoryId } = req.params;

    Product.create({
      name,
      quantity,
      value,
      image: fileName,
    }).then((product) => Category.findByIdAndUpdate(categoryId, {
      $push: {
        products: product._id,
      },
    })).then((category) => res.status(201).json(category))
      .catch((error) => res.status(400).json(error));
  },
};
