import Product from "../models/Product.js";
//!CREATE
export const createProduct = async (req, res) => {
    const newProduct = new Product(req.body);

    try {
        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct);
    } catch (err) {
        res.status(500).json(err);
    }
}
//!UPDATE
export const updateProduct = async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            {new: true}
        );
        res.status(200).json(updatedProduct);
    } catch (err) {
        res.status(500).json(err);
    }
}
//!DELETE
export const deleteProduct = async (req, res) => {
    try {
        await Product.findByIdAndUpdate(req.params.id);
        res.status(200).json("Product has been deleted ...");
    } catch (err) {
        res.status(500).json(err);
    }
}