import { fetchFromTMDB } from "../services/tmdb.service.js";
export async function getTrendingMovie(req, res) {
  try {
    const data = await fetchFromTMDB("url");
    const randomMovie = data.results[Math.round() * data.results?.length];
    res.status(200).json({ success: true, message: "Successfully logged out" });
  } catch (err) {
    console.log("err", err);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}
