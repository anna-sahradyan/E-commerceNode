import mongoose from "mongoose";
import GoodsMessage from "../models/goodsMessages.js"
//!GET GOODS
export const getGoods = async (req, res) => {
    try {
        const goodsMessages = await GoodsMessage.find();
        res.status(200).json(goodsMessages);
    } catch (err) {

        console.log(err)
    }

}
