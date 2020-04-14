const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let ProdutoSchema = new Schema({
    nome: {
        type: String, 
        required: true, max: 100
    },
    quantidade: {
        type: Number, 
        required: true
    },
    valor: {
        type: Number,
        required:true

    },
});
// Exportar o modelo
module.exports = mongoose.model('Produto', ProdutoSchema);