import express from "express";
import {stripeCharges} from "../controllers/stripe.controllers.js";

const router = express.Router();
router.post("/", stripeCharges)

export default router;