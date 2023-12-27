import mongoose from "mongoose";

const quizSchema = mongoose.Schema({
    sectionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Section",
        required: true,
    },
    unitId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Unit",
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    questions: [{ type: String, questionData: Object }],
});

const Quiz = mongoose.model("Quiz", quizSchema);

export default Quiz;
