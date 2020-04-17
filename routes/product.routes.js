const express = require('express');

const router = express.Router();

const ProductController = require('../controllers/product.controler');

router.get('/', ProductController.details);
router.get('/:id', ProductController.onedetails);
router.post('/', ProductController.create);
router.put('/:id', ProductController.update);
router.delete('/:id', ProductController.delete);

module.exports = router;
