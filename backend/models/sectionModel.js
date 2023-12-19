import mongoose from "mongoose";

const sectionSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    units: {
        type: Array,
        required: true,
        default: [],
    },
    color: {
        type: String,
        required: true,
    },
});

const Section = mongoose.model("Section", sectionSchema);

export default Section;
