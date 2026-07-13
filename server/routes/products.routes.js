// server/routes/products.routes.js
const express = require("express");
const router = express.Router();
const productController = require("../controller/products.controller");

// Standardized REST API endpoints
router.get("/all-products", productController.getProducts);
router.post("/create", productController.createProduct);
router.put("/edit", productController.updateProduct);
router.delete("/delete", productController.deleteProduct);

module.exports = router;