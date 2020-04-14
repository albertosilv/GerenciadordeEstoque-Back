const express = require('express');
const router = express.Router();
// Colocar controller que ainda não foi criado
const produto_controller = require('../controllers/produto.controler');
// teste simples
router.get('/testar', produto_controller.test);
router.post('/create',produto_controller.create);
router.get('/:id', produto_controller.onedetails);
router.get('/', produto_controller.details);
router.put ('/:id/mod', produto_controller.update);
router.delete('/:id/del', produto_controller.delete);



module.exports = router;