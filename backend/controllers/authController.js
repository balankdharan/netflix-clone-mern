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
  } catch (err) {}
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
