import asyncHandler from "express-async-handler";
import Unit from "../models/unitModel.js";
import Section from "../models/sectionModel.js";

const getAllUnits = asyncHandler(async (req, res) => {
    const { sectionId } = req.params;
    const units = await Unit.find({ sectionId });

    if (units) {
        res.status(200).json(units);
    }
});

const getUnit = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const unit = await Unit.findById(id);

    if (unit) {
        res.status(200).json(unit);
    }
    // res.status(200).json(id);
});

const createUnit = asyncHandler(async (req, res) => {
    const { sectionId, name, guide, color } = req.body;

    const unit = await Unit.create({ sectionId, name, guide, color });

    if (unit) {
        const section = await Section.findById(sectionId);
        section.units.push(unit._id);
        await section.save();
        res.status(201).json({
            _id: unit._id,
            sectionId: unit.sectionId,
            name: unit.name,
            guide: unit.guide,
            color: unit.color,
        });
    } else {
        res.status(400);
        throw new Error("Invalid section data");
    }
});

export { getAllUnits, getUnit, createUnit };
