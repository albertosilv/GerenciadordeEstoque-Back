const Category = require('../models/category.model');

module.exports = {
  create(req, res) {
    const category = new Category({
      nome: req.body.nome,
    });
    category.save((err) => {
      if (err) {
        return res.status(400).json({ error: err });
      }
      return res.status(201).json(category);
    });
  },

  onedetails(req, res) {
    Category.findById(req.params.id, (err, category) => {
      if (err) {
        return res.status(404).json({ error: err });
      }
      return res.status(200).json(category);
    });
  },

  details(req, res) {
    Category.find((err, category) => {
      if (err) {
        return res.status().json({ error: err });
      }
      return res.status(200).json(category);
    });
  },

  update(req, res) {
    const { id } = req.params;
    const { nome } = req.body;
    Category.findByIdAndUpdate(id, { nome }, (err, category) => {
      if (err) {
        return res.status(400).json({ error: err });
      }
      return res.status(200).json(category);
    });
  },

  delete(req, res) {
    Category.findByIdAndRemove(req.params.id, (err) => {
      if (err) {
        return res.status(400).json({ error: err });
      }
      return res.status(204).send();
    });
  },
};
