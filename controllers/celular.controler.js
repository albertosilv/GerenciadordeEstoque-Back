var Celular = require('../models/celular.model');
exports.test = function (req, res) {
    res.send('Olá! Teste ao Controller');
};

exports.create = function(req,res){
    let celular = new Celular({
            nome: req.body.nome,
            marca: req.body.marca
    });
    celular.save(function (err) {
        if (err) {
           return console.log(err);
        }
        res.send('Registro de Celular criado com sucesso');
    })
};
exports.onedetails = function (req,res){
    Celular.findById(req.params.id, function (err, celular) {
        if (err) return console.log(err);
        res.send(celular);
    })
}
exports.details = function (req, res) {
    Celular.find(function (err, celular) {
        if (err) return console.log(err);
        res.send(celular);
    })
};

exports.update = function(req,res){
        Celular.findByIdAndUpdate (req.params.id, {$set: req.body}, function (err, celular) { 
            if (err) return console.log(err); 
            res.send ('Celular atualizado.'); 
        }); 
};

exports.delete = function(req,res){
    Celular.findByIdAndRemove(req.params.id, function (err) {
        if (err) return console.log(err);
        res.send('Deletado com sucesso');
    })
}