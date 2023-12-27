import express from "express";
const router = express.Router();
import {
    getAllQuizzes,
    getQuiz,
    createQuiz,
} from "../controllers/quizController.js";

router.get("/:sectionId", getAllQuizzes);
router.get("/:id", getQuiz);
router.post("/create", createQuiz);

export default router;
