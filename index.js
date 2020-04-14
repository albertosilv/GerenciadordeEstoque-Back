const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const produto = require('./routes/produto.routes'); // Importa rota
const categoria = require('./routes/categoria.routes'); // Importa rota


let url="mongodb+srv://albertosilva:GqIHRbVgtDwpGD4S@cluster0-cnuoa.gcp.mongodb.net/test?retryWrites=true&w=majority"

let mongoDB = process.env.MONGODB_URI || url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro na Ligação ao MongoDB'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/produto', produto);
app.use('/categoria', categoria);

app.listen(4000, function(){
    console.log("Servidor iniciado");
})