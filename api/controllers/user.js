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
    const user = await User.create({ ...req.body, password_digest: req.body.password, profile: ["newest-found"] });
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

const updateProfile = async (req, res) => {
  const { action, option } = req.body;
  const profileOptions = ["newest-found", "newest", "newest-archived", "last-updated", "newest-applied", "stale"];
  const query = { username: res.locals.user.username };
  if (!action || !option) {
    res.status(400).json({ error: "Missing parameters!" });
  } else if (!profileOptions.includes(option)) {
    res.status(400).json({ error: "Option does not exist." });
  } else if (action === "add" && res.locals.user.profile.includes(option)) {
    res.status(400).json({ error: "Dashboard option already enabled." });
  } else if (action === "remove" && !res.locals.user.profile.includes(option)) {
    res.status(400).json({ error: "Dashboard option not enabled." });
  } else if (action === "add") {
    const newProfile = { profile: [...res.locals.user.profile, option] };
    await User.findOneAndUpdate(query, newProfile, { new: true, runValidators: true }, (err, user) => {
      if (err) {
        res.status(400).json({ error: err.message });
      } else {
        res.status(200).json({ user: extractUserPayload(user) });
      }
    });
  } else {
    const newProfile = { profile: res.locals.user.profile.filter((p) => p !== option) };
    await User.findOneAndUpdate(query, newProfile, { new: true, runValidators: true }, (err, user) => {
      if (err) {
        return res.status(400).json({ error: err.message });
      }
      return res.status(200).json({ user: extractUserPayload(user) });
    });
  }
};

module.exports = {
  login,
  register,
  verify,
  updateProfile,
};
