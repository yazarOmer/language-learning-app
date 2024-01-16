import express from "express";
const router = express.Router();
import {
    loginUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    decreaseLifePoint,
    getUserStats,
    updateUserPoint,
    getUsersByPoints,
    buyLifePoint,
    appendMistake,
    getMistakes,
    deleteMistake,
} from "../controllers/userController.js";
import { protect } from "../middlewares/authMiddleware.js";

router.post("/login", loginUser);
router.post("/register", registerUser);
router.post("/logout", logoutUser);
router.get("/profile", protect, getUserProfile);
router.put("/profile", protect, updateUserProfile);
router.put("/decrease-life-point", protect, decreaseLifePoint);
router.get("/getUserStats", protect, getUserStats);
router.put("/updateUserPoint", protect, updateUserPoint);
router.get("/getUsersByPoints", getUsersByPoints);
router.put("/buyLifePoint", protect, buyLifePoint);
router.put("/appendMistake", protect, appendMistake);
router.get("/getMistakes", protect, getMistakes);
router.put("/deleteMistake", protect, deleteMistake);

export default router;
