import asyncHandler from "express-async-handler";
import Listening from "../models/listeningModel.js";

const getAllListenings = asyncHandler(async (req, res) => {
    const listenings = await Listening.find({});

    if (listenings) {
        res.status(200).json(listenings);
    }
});

const getListeningQuiz = asyncHandler(async (req, res) => {
    const listenings = await Listening.aggregate([{ $sample: { size: 10 } }]);

    if (listenings) {
        res.status(200).json(listenings);
    }
});

const createListening = asyncHandler(async (req, res) => {
    const { questionData } = req.body;

    const listening = await Listening.create({
        questionData: questionData,
    });

    if (listening) {
        res.status(200).json(listening);
    }
});

export { getAllListenings, createListening, getListeningQuiz };
