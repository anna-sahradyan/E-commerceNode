import express from "express";
import {signIn, signUp, updatedUser} from "../controllers/user.controllers.js";

import  {verifyTokenAndAuthorization}  from  "../middleware/auth.middleware.js";
const router = express.Router();
router.post("/signin", signIn);
router.post("/signup",signUp);
router.patch("/:id",verifyTokenAndAuthorization,updatedUser);
export default router;
