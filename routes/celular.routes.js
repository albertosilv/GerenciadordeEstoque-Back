const express = require('express');
const router = express.Router();
// Colocar controller que ainda não foi criado
const celular_controller = require('../controllers/celular.controler');
// teste simples
router.get('/testar', celular_controller.test);
router.post('/create',celular_controller.create);
router.get('/:id', celular_controller.onedetails);
router.get('/', celular_controller.details);
router.put ('/:id/mod', celular_controller.update);
router.delete('/:id/del', celular_controller.delete);



module.exports = router;