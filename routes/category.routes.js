const express = require('express');

const router = express.Router();

const CategoryController = require('../controllers/category.controler');

router.get('/', CategoryController.details);
router.get('/:id', CategoryController.onedetails);
router.post('/', CategoryController.create);
router.put('/:id', CategoryController.update);
router.delete('/:id', CategoryController.delete);


module.exports = router;
