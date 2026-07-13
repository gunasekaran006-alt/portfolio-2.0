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