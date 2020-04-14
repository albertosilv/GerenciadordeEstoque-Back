const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let CelularSchema = new Schema({
    nome: {
        type: String, 
        required: true, max: 100
    },
    marca: {
        type: String, 
        required: true},
});
// Exportar o modelo
module.exports = mongoose.model('Celular', CelularSchema);