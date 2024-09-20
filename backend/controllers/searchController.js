import { User } from "../models/user.js";

export async function searchPerson(req, res) {
  const { query } = req.params;
  try {
    const response = await fetchFromTMDB("url");

    if (response.results.length === 0) {
      return res.status(404).send(null);
    }

    await User.findByIdAndUpdate(req.user._id, {
      $push: {
        searchHistory: {
          id: response.results[0].id,
          image: response.results[0].profile_path,
          title: response.results[0].name,
          searchType: "person",
          createdAt: new Date(),
        },
      },
    });
    res.status(200).json({ success: true, content: response.results });
  } catch (err) {
    console.log("err", err);

    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}
export async function searchMovie(req, res) {
  const { query } = req.params;
  try {
    const response = await fetchFromTMDB("url");

    if (response.results.length === 0) {
      return res.status(404).send(null);
    }

    await User.findByIdAndUpdate(req.user._id, {
      $push: {
        searchHistory: {
          id: response.results[0].id,
          image: response.results[0].profile_path,
          title: response.results[0].name,
          searchType: "movie",
          createdAt: new Date(),
        },
      },
    });
    res.status(200).json({ success: true, content: response.results });
  } catch (err) {
    console.log("err", err);

    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}
export async function searchTv(req, res) {
  const { query } = req.params;
  try {
    const response = await fetchFromTMDB("url");

    if (response.results.length === 0) {
      return res.status(404).send(null);
    }

    await User.findByIdAndUpdate(req.user._id, {
      $push: {
        searchHistory: {
          id: response.results[0].id,
          image: response.results[0].profile_path,
          title: response.results[0].name,
          searchType: "tv",
          createdAt: new Date(),
        },
      },
    });
    res.status(200).json({ success: true, content: response.results });
  } catch (err) {
    console.log("err", err);

    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}

export async function getSearchHistory(req, res) {
  try {
  } catch (err) {
    console.log("err", err);

    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}
export async function removeItemFromHistory(req, res) {}
