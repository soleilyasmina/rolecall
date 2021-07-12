const { compareSync } = require("bcrypt");
const { sign, verify } = require("jsonwebtoken");

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

module.exports = {
  createToken,
  extractUserPayload,
  verifyToken,
  comparePasswords,
};
