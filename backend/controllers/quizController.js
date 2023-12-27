import asyncHandler from "express-async-handler";
import Quiz from "../models/quizModel.js";

const getAllQuizzes = asyncHandler(async (req, res) => {
    const { sectionId } = req.params;
    const quizzes = await Quiz.find({ sectionId });

    if (quizzes) {
        res.status(200).json(quizzes);
    }
});

const getQuiz = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const quiz = await Quiz.findById(id);

    if (quiz) {
        res.status(200).json(quiz);
    }
});

const createQuiz = asyncHandler(async (req, res) => {
    const { sectionId, unitId, title, questions } = req.body;

    const quiz = await Quiz.create({ sectionId, unitId, title, questions });

    if (quiz) {
        res.status(201).json({
            _id: quiz._id,
            sectionId: quiz.sectionId,
            unitId: quiz.unitId,
            title: quiz.title,
            questions: quiz.questions,
        });
    } else {
        res.status(400);
        throw new Error("Invalid quiz data");
    }
});

export { getAllQuizzes, getQuiz, createQuiz };
