const { Router } = require('express');
const categoryRouter = require('./categoryRouter');
const productRouter = require('./productRouter');

const router = Router();
router.use('/category', categoryRouter);
router.use('/product', productRouter);

module.exports = router;