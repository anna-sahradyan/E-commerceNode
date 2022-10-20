import mongoose from "mongoose";
import Product from "../models/Product.js"
//!GET GOODS
export const getGoods = async (req, res) => {
    try {
        const goodsMessages = await Product.find();
        res.status(200).json(goodsMessages);
    } catch (err) {

        console.log(err)
    }

}
//!UPDATE Product

