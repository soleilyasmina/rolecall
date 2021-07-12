const User = require("../models/user");
const { createToken, extractUserPayload } = require("../utils");

const login = async (req, res) => {
  try {
    res.status(200).json({ message: "Nothing here yet!" });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

const register = async (req, res) => {
  try {
    const user = await User.create({ ...req.body, password_digest: req.body.password });
    const userInfo = extractUserPayload(user);
    const token = createToken(userInfo);
    res.status(201).json({ user: userInfo, token });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

const verify = async (req, res) => {
  try {
    res.status(200).json({ message: "Nothing here yet!" });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

module.exports = {
  login,
  register,
  verify,
};
