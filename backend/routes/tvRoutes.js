import express from "express";
import { getTv } from "../controllers/tvController.js";

const router = express.Router();

router.get("/tv", getTv);

export default router;
