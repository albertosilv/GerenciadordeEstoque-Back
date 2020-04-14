const express = require('express');
const router = express.Router();
// Colocar controller que ainda não foi criado
const categoria_controller = require('../controllers/categoria.controler');
// teste simples
router.get('/testar', categoria_controller.test);
router.post('/create',categoria_controller.create);
router.get('/:id', categoria_controller.onedetails);
router.get('/', categoria_controller.details);
router.put ('/:id/mod', categoria_controller.update);
router.delete('/:id/del', categoria_controller.delete);


module.exports = router;