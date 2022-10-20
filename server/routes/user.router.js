import express from "express";
import {
    deleteUser,
    getAllUser,
    getUser,
    signIn,
    signUp,
    updatedUser,
    getStats
} from "../controllers/user.controllers.js";

import {verifyTokenAndAdmin, verifyTokenAndAuthorization} from "../middleware/auth.middleware.js";

const router = express.Router();

router.patch(`/:id`, verifyTokenAndAuthorization, updatedUser);
router.delete(`/:id`,verifyTokenAndAuthorization,deleteUser);
router.get(`/find/:id`,verifyTokenAndAdmin,getUser);
router.get(`/`,verifyTokenAndAdmin,getAllUser);
router.get(`/stats`,verifyTokenAndAdmin,getStats);


router.post(`/signIn`, signIn);
router.post(`/signUp`, signUp);
export default router;
