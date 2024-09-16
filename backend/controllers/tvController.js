import { fetchFromTMDB } from "../services/tmdb.service.js";

export async function getTrendingTv(req, res) {
  try {
    const data = await fetchFromTMDB("url");
    const randomMovie = data.results[Math.round() * data.results?.length];
    res.status(200).json({ success: true, content: randomMovie });
  } catch (err) {
    console.log("err", err);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}

export async function getTvTrailers(req, res) {
  const { id } = req.params;

  try {
    const data = await fetchFromTMDB("url");
    res.status(200).json({ success: true, trailers: data.results });
  } catch (err) {
    console.log("err", err);
    if (err.message.includes("404")) {
      return res.status(404).send(null);
    }
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}

export async function getTvDetails(req, res) {
  const { id } = req.params;
  try {
    const data = await fetchFromTMDB("url");
    res.status(200).json({ success: true, content: data });
  } catch (err) {
    console.log("err", err);
    if (err.message.includes("404")) {
      return res.status(404).send(null);
    }
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}

export async function getSimilarTvs(req, res) {
  const { id } = req.params;
  try {
    const data = await fetchFromTMDB("url");
    res.status(200).json({ success: true, similar: data.results });
  } catch (err) {
    console.log("err", err);

    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}
export async function getTvsByCategory(req, res) {
  const { category } = req.params;
  try {
    const data = await fetchFromTMDB("url");
    res.status(200).json({ success: true, content: data.results });
  } catch (err) {
    console.log("err", err);

    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}
