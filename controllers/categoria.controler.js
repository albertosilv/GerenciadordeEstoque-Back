var Categoria = require('../models/categoria.model');
exports.test = function (req, res) {
    res.send('Olá! Teste ao Controller');
};

exports.create = function(req,res){
    let categoria = new Categoria({
            nome: req.body.nome,
    });
    categoria.save(function (err) {
        if (err) {
           return console.log(err);
        }
        res.send('Registro de produto criado com sucesso');
    })
};
exports.onedetails = function (req,res){
    Categoria.findById(req.params.id, function (err, categoria) {
        if (err) return console.log(err);
        res.send(categoria);
    })
}
exports.details = function (req, res) {
    Categoria.find(function (err, categoria) {
        if (err) return console.log(err);
        res.send(categoria);
    })
};

exports.update = function(req,res){
        Categoria.findByIdAndUpdate (req.params.id, {$set: req.body}, function (err, categoria) { 
            if (err) return console.log(err); 
            res.send ('Categoria atualizado.'); 
        }); 
};

exports.delete = function(req,res){
    Categoria.findByIdAndRemove(req.params.id, function (err) {
        if (err) return console.log(err);
        res.send('Deletado com sucesso');
    })
}