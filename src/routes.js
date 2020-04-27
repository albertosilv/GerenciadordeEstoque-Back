const express = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer');

const router = express.Router();

const ProductController = require('./controllers/ProductController');
const CategoryController = require('./controllers/CategoryController');

router.get('/categorias/', CategoryController.index);
router.get('/categorias/:id', CategoryController.show);
router.post('/categorias/', CategoryController.create);
router.put('/categorias/:id', CategoryController.update);
router.delete('/categorias/:id', CategoryController.delete);

router.post('/categorias/:categoryId/produtos', multer(multerConfig).single('image'), ProductController.create);
router.get('/produtos/', ProductController.index);
router.get('/produtos/:id', ProductController.show);
router.put('/produtos/:id', multer(multerConfig).single('image'), ProductController.update);
router.delete('/produtos/:id', ProductController.delete);

module.exports = router;
