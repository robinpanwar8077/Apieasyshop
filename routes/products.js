const express = require("express");
const router =express.Router();
const {getAllProducts,getAllProductstest}= require("../controllers/products")
router.route("/").get(getAllProducts);
router.route("/test").get(getAllProductstest)

module.exports = router;