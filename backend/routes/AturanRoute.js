import express from "express";
import {
  getAturan,
  getAturanById,
  createAturan,
  updateAturan,
  deleteAturan,
} from "../controllers/AturanController.js";

const router = express.Router();

router.get("/aturan", getAturan);
router.get("/aturan/:id", getAturanById);
router.post("/add-aturan", createAturan);
router.put("/aturan/:id", updateAturan);
router.delete("/aturan/:id", deleteAturan);

export default router;
