import { User } from "../models/user.js";

export const signup = async (req, res) => {
  try {
    const { email, password, username } = req.body;
    if (!email || !password || !username) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ success: false, message: "Invalid email" });
    }

    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 6 characters",
      });
    }
    const existingUserByEmail = await User.findOne({ email: email });
    if (existingUserByEmail) {
      return res.status(400).json({
        success: false,
        message: "Email already exist",
      });
    }
    const existingUserByUserName = await User.findOne({ username: username });

    if (existingUserByUserName) {
      return res.status(400).json({
        success: false,
        message: "Username already exist",
      });
    }
    const PROFILE_PICS = ["/avatar1.png", "/avatar2.png", "/avatar3.png"];
    const image = PROFILE_PICS[Math.floor(Math.random() * PROFILE_PICS.length)];
    const newUser = new User({
      email: email,
      password: password,
      username: username,
      image: image,
    });
    await newUser.save();
    res.status(201).json({
      success: true,
      user: {
        ...newUser._doc,
        password: "",
      },
    });
  } catch (err) {
    console.log("err", err);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
export async function login(req, res) {
  try {
    res.send("login");
  } catch (err) {}
}
export async function logout(req, res) {
  try {
    res.send("logout");
  } catch (err) {}
}
//K1CzOXqrVwnVgk9H