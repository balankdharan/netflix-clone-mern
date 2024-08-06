import express from "express";

const router = express.Router();

router.get("/signup", function (req, res) {
  //changes
  res.send("signUp");
});
router.get("/login", function (req, res) {
  res.send("signUp");
});
router.get("/logout", function (req, res) {
  res.send("signUp");
});

export default router;
