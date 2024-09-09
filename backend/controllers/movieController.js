import { fetchFromTMDB } from "../services/tmdb.service.js";
export async function getTrendingMovie(req, res) {
  try {
    res.status(200).json({ success: true, message: "Successfully logged out" });
  } catch (err) {
    console.log("err", err);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}
