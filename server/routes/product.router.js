import express from "express";
import {getGoods} from "../controllers/product.controllers.js";

const router = express.Router();
//!GET GOODS
router.get("/", getGoods);

export default router;