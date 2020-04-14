const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let CategoriaSchema = new Schema({
    nome: {
        type: String, 
        required: true, max: 100
    },
});
// Exportar o modelo
module.exports = mongoose.model('Categoria', CategoriaSchema);