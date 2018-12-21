const Product = require('../models/productModel');

//Simple version, without validation or sanitation
// exports.test = function (req, res) {
//     res.send('Greetings from the Test controller!');
// };

// controllers/products.js
exports.product_create = function (req, res) {
    let product = new Product(
        {
            name: req.body.name,
            price: req.body.price
        }
    );

    product.save(function (err) {
        if (err) throw err; 
        res.send('Product Created successfully')
    })
};

//read_details
exports.product_details = function (req, res) {
    Product.findById(req.params.id, function (err, product) {
        if (err) return next(err);
        res.send(product);
    })
};

//update controller
exports.product_update = function(req,res) {
    Product.findOneAndUpdate(req.param.id, {$set: req.body}, function (err, product) {
        if (err) return next(err);
        res.send("Product Updated.");
    })
}

//delete_collections
exports.product_delete = function(req, res) {
    Product.findOneAndDelete(req.param.id, {$set: req.body}, function (err, product) {
        if (err) return next(err);
        res.send("Deleted successfully.");
    })
}