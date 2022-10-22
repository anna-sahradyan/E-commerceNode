import Order from "../models/Order.js";

//!CREATE
export const createOrder = async (req, res) => {
    const newCart = new Order(req.body);

    try {
        const savedOrder = await newCart.save();
        res.status(200).json(savedOrder);
    } catch (err) {
        res.status(500).json(err);
    }
}
//!UPDATE
export const updateOrder = async (req, res) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            {new: true}
        );
        res.status(200).json(updatedOrder);
    } catch (err) {
        res.status(500).json(err);
    }
}
//!DELETE
export const deleteOrder = async (req, res) => {
    try {
        await Order.findByIdAndDelete(req.params.id);
        res.status(200).json("Order has been deleted ...");
    } catch (err) {
        res.status(500).json(err);
    }
}
//!GET USER  ORDERS
export const getOrder = async (req, res) => {
    try {
        const orders = await Order.find({userId:req.params.userId});
        res.status(200).json(orders);
    } catch (err) {
        res.status(500).json(err);
    }

}
//!GET ALL
export const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find()

        res.status(200).json(orders);
    } catch (err) {
        res.status(500).json(err);
    }
}