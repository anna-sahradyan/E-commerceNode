import express from "express";
import {createProduct, deleteProduct, getAllProducts, updateProduct,getProduct} from "../controllers/product.controllers.js";
import {verifyTokenAndAdmin} from "../middleware/auth.middleware.js";

const router = express.Router();
//!CREATE
router.post("/",verifyTokenAndAdmin, createProduct);
//!UPDATE
router.patch("/:id",verifyTokenAndAdmin, updateProduct);
//!DELETE
router.delete("/:id",verifyTokenAndAdmin, deleteProduct);
//!GET PRODUCT
router.get("/find/:id", getProduct);
//!GET ALL PRODUCT
router.get("/", getAllProducts);

export default router;