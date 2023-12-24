import express from "express";
const router = express.Router();
import {
    getAllUnits,
    getUnit,
    createUnit,
} from "../controllers/unitController.js";

router.get("/all", getAllUnits);
router.get("/:id", getUnit);
router.post("/create", createUnit);

export default router;
