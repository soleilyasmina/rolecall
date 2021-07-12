const { compareSync } = require("bcrypt");
const { sign, verify } = require("jsonwebtoken");
const User = require("../models/user");

const { SECRET } = process.env;

const createToken = (payload) => sign(payload, SECRET);

const verifyToken = (token) => verify(token, SECRET);

const extractUserPayload = (user) => {
  const {
    username, email, profile, roles,
  } = user;
  return {
    username, email, profile, roles,
  };
};

const comparePasswords = (password, userPassword) => compareSync(password, userPassword);

const restrict = async (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  try {
    const { username } = verifyToken(token);
    if (username) {
      const [user] = await User.find({ username });
      res.locals.user = user;
      next();
    } else {
      throw new Error();
    }
  } catch (e) {
    res.status(401).json({ error: "Not authorized!" });
  }
};

module.exports = {
  createToken,
  extractUserPayload,
  verifyToken,
  comparePasswords,
  restrict,
};
