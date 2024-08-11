import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();
const app = express();

app.use("/api/v1/auth", authRoutes);

app.listen(5000, () => {
  console.log(`Server started at http://localhost:5000`);
});
