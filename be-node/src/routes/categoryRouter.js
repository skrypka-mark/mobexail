const { Router } = require('express');
const CategoryController = require('../controllers/CategoryController');

const categoryRouter = Router();
categoryRouter.get('/:id', CategoryController.getCategory);

module.exports = categoryRouter;