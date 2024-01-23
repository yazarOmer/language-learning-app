import mongoose from "mongoose";

const listeningSchema = mongoose.Schema({
    questionData: { type: Object, required: true },
});

const Listening = mongoose.model("listening", listeningSchema);

export default Listening;
