export async function logout(req, res) {
  try {
    res.clearCookie("jwt-netflix");
    res.status(200).json({ success: true, message: "Successfully logged out" });
  } catch (err) {
    console.log("err", err);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}
