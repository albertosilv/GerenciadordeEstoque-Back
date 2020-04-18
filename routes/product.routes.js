const express = require('express');

const router = express.Router();

const ProductController = require('../controllers/product.controler');

router.get('/', ProductController.index);
router.get('/:id', ProductController.show);
router.post('/', ProductController.create);
router.put('/:id', ProductController.update);
router.delete('/:id', ProductController.delete);

module.exports = router;
