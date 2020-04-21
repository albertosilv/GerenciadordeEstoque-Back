const express = require('express');
const multer = require('multer');
const multerConfig = require('../config/multer');

const router = express.Router();

const CategoryController = require('../controllers/category.controler');
const ProductCategoryController = require('../controllers/ProductCategoryController');

router.get('/', CategoryController.index);
router.get('/:id', CategoryController.show);
router.post('/', CategoryController.create);
router.put('/:id', CategoryController.update);
router.delete('/:id', CategoryController.delete);

router.post('/:categoryId/produtos', multer(multerConfig).single('image'), ProductCategoryController.create);
module.exports = router;
