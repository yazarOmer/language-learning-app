import mongoose from "mongoose";

const unitSchema = mongoose.Schema({
    sectionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Section",
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    guide: [{ eng: String, tr: String }],
    color: {
        type: String,
        required: true,
    },
});

const Unit = mongoose.model("Unit", unitSchema);

export default Unit;
