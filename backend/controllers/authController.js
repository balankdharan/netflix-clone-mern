export const signup = async (req, res) => {
  try {
    res.send("signup");
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
