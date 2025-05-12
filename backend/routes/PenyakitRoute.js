import express from "express";
import {
  getPenyakit,
  getPenyakitById,
  createPenyakit,
  updatePenyakit,
  deletePenyakit,
} from "../controllers/PenyakitController.js";

const router = express.Router();

router.get("/penyakit", getPenyakit);
router.get("/penyakit/:id", getPenyakitById);
router.post("/add-penyakit", createPenyakit);
router.put("/penyakit/:id", updatePenyakit);
router.delete("/penyakit/:id", deletePenyakit);

export default router;