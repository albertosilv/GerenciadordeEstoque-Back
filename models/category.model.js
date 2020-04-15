const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
    max: 100,
  },
});

module.exports = mongoose.model('Category', CategorySchema);
