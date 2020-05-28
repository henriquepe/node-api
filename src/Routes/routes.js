const express = require('express');

const routes = express.Router();

const ProductController = require('../Controllers/ProductController');

routes.get('/products', ProductController.index);

routes.get('/products/:id', ProductController.show);

routes.post('/products', ProductController.createProduct);

routes.delete('/products/:id', ProductController.delete);

routes.put('/products/:id', ProductController.update);

module.exports = routes;