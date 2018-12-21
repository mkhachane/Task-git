const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const product_controller = require('../controllers/productController');


// a simple test url to check that all of our files are communicating correctly.
//details from database
router.get('/:id', product_controller.product_details);
//write data into database
router.post('/', product_controller.product_create);
// Update the data 
router.put('/:id', product_controller.product_update);
// Delete data from database
router.delete('/:id', product_controller.product_delete);
module.exports = router;
