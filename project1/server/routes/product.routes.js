const ProductController = require('../controllers/product.controller');
const { Product } = require('../models/product.model');
module.exports = function(app){
    app.get('/api', ProductController.index);
    app.post('/api/create', ProductController.createProduct);
    app.get('/api/find', ProductController.findpro);
}