const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const produto = require('./routes/product.routes'); // Importa rota
const categoria = require('./routes/category.routes'); // Importa rota


let url = "mongodb+srv://albertosilva:GqIHRbVgtDwpGD4S@cluster0-cnuoa.gcp.mongodb.net/test?retryWrites=true&w=majority"

let mongoDB = process.env.MONGODB_URI || url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro na Ligação ao MongoDB'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/produtos', produto);
app.use('/categorias', categoria);

app.use('/files', express.static(path.resolve(__dirname, 'tmp', 'uploads')));

app.listen(4000, function () {
  console.log("Servidor iniciado");
})
