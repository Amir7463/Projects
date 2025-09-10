const {AddProduct, DeleteProduct, UpdateProduct, GetAllProducts, GetProductById}= require("../controllers/product");
const express = require('express');
const upload = require("../middleware/uploads");
const router = express.Router();

router.post('/AddProduct',upload.single("image"), AddProduct);
router.delete('/DeleteProduct/:id', DeleteProduct);
router.put('/UpdateProduct/:id', UpdateProduct);
router.get('/GetAllProducts', GetAllProducts);
router.get('/GetProductById/:id', GetProductById);
module.exports = router;
