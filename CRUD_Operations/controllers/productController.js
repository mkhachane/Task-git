const Product = require('../models/productModel');

// controllers/products.js
/* product_create: create data into database 
* INPUT:
*      name: table name
*      price: any price
* OUTPUT:
*     massage
*/ 
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
/* product_details: read data from database 
* INPUT:
*      id: Id from table
* OUTPUT:
*     details from table
*/
exports.product_details = function (req, res) {
    Product.findById(req.params.id, function (err, product) {
        if (err) return next(err);
        res.send(product);
    })
};

//update controller
/* product_update: update data into database 
* INPUT:
*      Id: table Id
* OUTPUT:
*     update_massage
*/
exports.product_update = function(req,res) {
    Product.findOneAndUpdate(req.param.id, {$set: req.body}, function (err, product) {
        if (err) return next(err);
        res.send("Product Updated.");
    })
}

//delete_collections
/* product_delete: delete data from database 
* INPUT:
*      Id: Id of table 
* OUTPUT:
*     deleted_massage
*/
exports.product_delete = function(req, res) {
    Product.findOneAndDelete(req.param.id, {$set: req.body}, function (err, product) {
        if (err) return next(err);
        res.send("Deleted successfully.");
    })
}