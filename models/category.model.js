const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    max: 100,
  },
  products: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    default: [],
  }],
});

module.exports = mongoose.model('Category', CategorySchema);
