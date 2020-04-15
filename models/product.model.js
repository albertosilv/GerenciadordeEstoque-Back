const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
    max: 100,
  },
  quantidade: {
    type: Number,
    required: true,
  },
  valor: {
    type: Number,
    required: true,
  },
});


module.exports = mongoose.model('Product', ProductSchema);
