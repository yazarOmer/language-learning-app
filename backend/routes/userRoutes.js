import express from "express";
const router = express.Router();
import {
    loginUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    decreaseLifePoint,
} from "../controllers/userController.js";
import { protect } from "../middlewares/authMiddleware.js";

router.post("/login", loginUser);
router.post("/register", registerUser);
router.post("/logout", logoutUser);
router.get("/profile", protect, getUserProfile);
router.put("/profile", protect, updateUserProfile);
router.put("/decrease-life-point", protect, decreaseLifePoint);

export default router;
