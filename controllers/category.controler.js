const Category = require('../models/category.model');

module.exports = {
  create(req, res) {
    const category = new Category({
      name: req.body.name,
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
    Category.find({}).populate({ path: 'products', select: 'name quantity -_id' })
      .then((categories) => res.status(200).json(categories))
      .catch((err) => res.status(400).json({ error: err }));
  },
  update(req, res) {
    const { id } = req.params;
    const { name } = req.body;
    Category.findByIdAndUpdate(id, { name }, (err, category) => {
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
