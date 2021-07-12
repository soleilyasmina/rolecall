const User = require("../models/user");
const { createToken, extractUserPayload, comparePasswords } = require("../utils");

const login = async (req, res) => {
  try {
    const [user] = await User.find({ username: req.body.username });
    if (comparePasswords(req.body.password, user.password_digest)) {
      const userInfo = extractUserPayload(user);
      const token = createToken(userInfo);
      res.status(201).json({ user: userInfo, token });
    } else {
      res.status(401).json({ error: "Not authorized" });
    }
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
    const userInfo = extractUserPayload(res.locals.user);
    res.status(200).json({ user: userInfo });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

module.exports = {
  login,
  register,
  verify,
};
