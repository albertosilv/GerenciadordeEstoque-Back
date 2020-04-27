const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    max: 100,
  },
  quantity: {
    type: Number,
    required: true,
    min: 0,
  },
  value: {
    type: Number,
    required: true,
    min: 0,
  },
  image: {
    type: String,
  },
});

module.exports = mongoose.model('Product', ProductSchema);
