const { Router } = require('express');
const ProductController = require('../controllers/ProductController');

const productRouter = Router();
productRouter.get('/:id', ProductController.getProduct);

module.exports = productRouter;