const express = require('express');
const multer = require('multer');
const multerConfig = require('../config/multer');

const router = express.Router();

const ProductController = require('../controllers/product.controler');

router.get('/', ProductController.index);
router.get('/:id', ProductController.show);
router.post('/', ProductController.create);
router.put('/:id', multer(multerConfig).single('image'), ProductController.update);
router.delete('/:id', ProductController.delete);

module.exports = router;
