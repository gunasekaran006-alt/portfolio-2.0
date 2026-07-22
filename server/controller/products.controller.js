// type:1
// const productModel = require("../models/products.model");

// // Clean Code Pattern: Exporting as individual functions
// exports.getProducts = (req, res) => {
//     res.json({ message: "All Products fetched successfully" });
// };

// exports.createProduct = (req, res) => {
//     res.json({ message: "Product Added" });
// };

// exports.updateProduct = (req, res) => {
//     res.json({ message: "Product Updated" });
// };

// exports.deleteProduct = (req, res) => {
//     res.json({ message: "Product Deleted" });
// };


// type:2
const Product = require("../models/products.model");

exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json({ message: "Error fetching products", error: err.message });
    }
};

exports.createProduct = async (req, res) => {
    try {
        const newProduct = new Product(req.body);
        await newProduct.save();
        res.status(201).json({ message: "Product Added to MongoDB", product: newProduct });
    } catch (err) {
        res.status(500).json({ message: "Error saving product", error: err.message });
    }
};

exports.updateProduct = async (req, res) => {
    try {
        const { id } = req.query; // or req.body / req.params
        await Product.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json({ message: "Product Updated in DB" });
    } catch (err) {
        res.status(500).json({ message: "Error updating product", error: err.message });
    }
};

exports.deleteProduct = async (req, res) => {
    try {
        const { id } = req.query;
        await Product.findByIdAndDelete(id);
        res.status(200).json({ message: "Product Deleted from DB" });
    } catch (err) {
        res.status(500).json({ message: "Error deleting product", error: err.message });
    }
};

exports.allProducts = exports.getProducts;







// exports.allProducts = (req, res) => {
//     if (productModel.length === 0) {
//         return res.json({ message: "No Products Added" });
//     }
//     res.json(productModel);
// };

// exports.createProduct = (req, res) => {
//     const { title, price, category } = req.body;
//     const newProduct = {
//         id: Date.now().toString(),
//         title,
//         price,
//         category
//     };
//     productModel.push(newProduct);
//     res.json({ message: "Product Added", product: newProduct });
// };


