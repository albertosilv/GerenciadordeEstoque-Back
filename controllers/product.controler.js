const Product = require('../models/product.model');

module.exports = {
  create(req, res) {
    const product = new Product({
      name: req.body.name,
      quantity: req.body.quantity,
      value: req.body.value,
    });
    product.save((err) => {
      if (err) {
        return res.status(400).json({ error: err });
      }
      return res.status(201).json(product);
    });
  },

  show(req, res) {
    Product.findById(req.params.id, (err, produto) => {
      if (err) {
        return res.status(400).json({ error: err });
      }
      return res.status(200).json(produto);
    });
  },

  index(req, res) {
    Product.find((err, produto) => {
      if (err) {
        return res.status(400).json({ error: err });
      }
      return res.status(200).json(produto);
    });
  },

  update(req, res) {
    Product.findByIdAndUpdate(req.params.id, { $set: req.body }, (err, product) => {
      if (err) {
        return res.status(400).json({ error: err });
      }
      return res.status(200).json(product);
    });
  },
  delete(req, res) {
    Product.findByIdAndRemove(req.params.id, (err) => {
      if (err) {
        return res.status(400).json({ error: err });
      }
      return res.status(204).json();
    });
  },
};
