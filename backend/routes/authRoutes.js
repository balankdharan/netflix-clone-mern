import express from "express";
import {
  login,
  logout,
  signup,
  authCheck,
} from "../controllers/authController.js";
import { protectRoute } from "../middleware/protectRoute.js";
const router = express.Router();

router.get("/signup", signup);
router.get("/login", login);
router.get("/logout", logout);

router.get("/authCheck", protectRoute, authCheck);

export default router;
