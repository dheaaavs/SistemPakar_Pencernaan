import express from "express";
import {
  getDiagnosa,
  getDiagnosaById,
  createDiagnosa,
  updateDiagnosa,
  deleteDiagnosa,
} from "../controllers/DiagnosaController.js";

const router = express.Router();

router.get("/diagnosa", getDiagnosa);
router.get("/diagnosa/:id", getDiagnosaById);
router.post("/add-diagnosa", createDiagnosa);
router.put("/diagnosa/:id", updateDiagnosa);
router.delete("/diagnosa/:id", deleteDiagnosa);

export default router;
