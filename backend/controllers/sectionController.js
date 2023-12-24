import asyncHandler from "express-async-handler";
import Section from "../models/sectionModel.js";

const getAllSections = asyncHandler(async (req, res) => {
    const sections = await Section.find({});

    if (sections) {
        res.status(200).json(sections);
    }
});

const getSection = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const section = await Section.findById(id);

    if (section) {
        res.status(200).json(section);
    }
    // res.status(200).json(id);
});

const createSection = asyncHandler(async (req, res) => {
    const { name, color, image } = req.body;

    const section = await Section.create({ name, color, image });

    if (section) {
        res.status(201).json({
            _id: section._id,
            name: section.name,
            units: section.units,
            color: section.color,
            image: section.image,
        });
    } else {
        res.status(400);
        throw new Error("Invalid section data");
    }
});

export { getAllSections, getSection, createSection };
