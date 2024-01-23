import express from "express";
const router = express.Router();
import {
    getAllListenings,
    createListening,
    getListeningQuiz,
} from "../controllers/listeningController.js";

router.get("/", getListeningQuiz);
router.get("/all", getAllListenings);
router.post("/create", createListening);

export default router;
