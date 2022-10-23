import express from "express";
import {verifyToken, verifyTokenAndAdmin, verifyTokenAndAuthorization} from "../middleware/auth.middleware.js";
import {
    createOrder,
    deleteOrder,
    getAllOrders,
    getIncome,
    getOrder,
    updateOrder
} from "../controllers/order.controllers.js";

const router = express.Router();

//!CREATE
router.post("/",verifyToken, createOrder);
//!DELETE
router.delete("/:id",verifyTokenAndAdmin, deleteOrder);
//!GET ORDER
router.get("/find/:userId",verifyTokenAndAuthorization,getOrder);
//!GET ALL PRODUCT
router.get("/",verifyTokenAndAdmin, getAllOrders);
//!UPDATE
router.patch("/:id",verifyTokenAndAdmin, updateOrder);
//!GET USER INCOME
router.get("/income",verifyTokenAndAdmin, getIncome);



export default router;