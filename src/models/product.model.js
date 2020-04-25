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

ProductSchema.pre('save', function () {
  if (this.image) {
    this.image = `http://localhost:4000/files/${this.image}`;
  }
});

module.exports = mongoose.model('Product', ProductSchema);
