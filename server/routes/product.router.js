import express from "express";
import {createProduct, deleteProduct, updateProduct} from "../controllers/product.controllers.js";
import {verifyTokenAndAdmin} from "../middleware/auth.middleware.js";

const router = express.Router();
//!CREATE
router.post("/",verifyTokenAndAdmin, createProduct);
router.patch("/:id",verifyTokenAndAdmin, updateProduct);
router.delete("/:id",verifyTokenAndAdmin, deleteProduct);

export default router;