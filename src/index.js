const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();


app.use(require('./routes'))

let url = "mongodb+srv://albertosilva:GqIHRbVgtDwpGD4S@cluster0-cnuoa.gcp.mongodb.net/test?retryWrites=true&w=majority"
let mongoDB = process.env.MONGODB_URI || url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro na Ligação ao MongoDB'));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT || 4000;

app.listen(port, function () {
  console.log("Servidor iniciado na porta", port);
})
