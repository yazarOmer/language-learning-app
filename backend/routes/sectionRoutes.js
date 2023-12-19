import express from "express";
const router = express.Router();
import {
    getAllSections,
    getSection,
    createSection,
} from "../controllers/sectionController.js";

router.get("/all", getAllSections);
router.get("/:id", getSection);
router.post("/create", createSection);

export default router;
