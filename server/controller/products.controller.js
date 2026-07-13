const productModel = require("../models/products.model");

// Clean Code Pattern: Exporting as individual functions
exports.getProducts = (req, res) => {
    res.json({ message: "All Products fetched successfully" });
};

exports.createProduct = (req, res) => {
    res.json({ message: "Product Added" });
};

exports.updateProduct = (req, res) => {
    res.json({ message: "Product Updated" });
};

exports.deleteProduct = (req, res) => {
    res.json({ message: "Product Deleted" });
};



exports.allProducts = (req, res) => {
    if (productModel.length === 0) {
        return res.json({ message: "No Products Added" });
    }
    res.json(productModel);
};

exports.createProduct = (req, res) => {
    const { title, price, category } = req.body;
    const newProduct = {
        id: Date.now().toString(),
        title,
        price,
        category
    };
    productModel.push(newProduct);
    res.json({ message: "Product Added", product: newProduct });
};