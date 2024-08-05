import express from "express";
import authRoutes from "./routes/authRoutes.js";

const app = express();

app.use("/api/v1/auth", authRoutes);

app.listen(5000, () => {
  console.log(`Server started at http://localhost:5000`);
});
