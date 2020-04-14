var Produto = require('../models/produto.model');
exports.test = function (req, res) {
    res.send('Olá! Teste ao Controller');
};

exports.create = function(req,res){
    let produto = new Produto({
            nome: req.body.nome,
            quantidade: req.body.quantidade,
            valor: req.body.valor
    });
    produto.save(function (err) {
        if (err) {
           return console.log(err);
        }
        res.send('Registro de produto criado com sucesso');
    })
};
exports.onedetails = function (req,res){
    Produto.findById(req.params.id, function (err, produto) {
        if (err) return console.log(err);
        res.send(produto);
    })
}
exports.details = function (req, res) {
    Produto.find(function (err, produto) {
        if (err) return console.log(err);
        res.send(produto);
    })
};

exports.update = function(req,res){
        Produto.findByIdAndUpdate (req.params.id, {$set: req.body}, function (err, produto) { 
            if (err) return console.log(err); 
            res.send ('produto atualizado.'); 
        }); 
};

exports.delete = function(req,res){
    Produto.findByIdAndRemove(req.params.id, function (err) {
        if (err) return console.log(err);
        res.send('Deletado com sucesso');
    })
}