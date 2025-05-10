import express from "express";
import {
  getGejala,
  getGejalaById,
  createGejala,
  updateGejala,
  deleteGejala,
} from "../controllers/GejalaController.js";

const router = express.Router();

router.get("/gejala", getGejala);
router.get("/gejala/:id", getGejalaById);
router.post("/add-gejala", createGejala);
router.put("/gejala/:id", updateGejala);
router.delete("/gejala/:id", deleteGejala);

export default router;
