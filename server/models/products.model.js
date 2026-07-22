// // server/models/products.model.js
// let products = [];
// module.exports = products;


const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
    title: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true }
});
module.exports = mongoose.model("Product", productSchema);