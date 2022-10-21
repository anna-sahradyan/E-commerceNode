import express from "express";
import {verifyTokenAndAdmin, verifyTokenAndAuthorization} from "../middleware/auth.middleware.js";
import {createCart, deleteCart, getAllCart, getCart, updateCart} from "../controllers/cart.controllers.js";

const router = express.Router();

//!CREATE
router.post("/",verifyToken, createCart);
//!UPDATE
router.patch("/:id",verifyTokenAndAuthorization, updateCart);
//!DELETE
router.delete("/:id",verifyTokenAndAuthorization, deleteCart);
//!GET PRODUCT
router.get("/find/:userId",verifyTokenAndAuthorization,getCart);
//!GET ALL PRODUCT
router.get("/",verifyTokenAndAdmin, getAllCart);


export default router;