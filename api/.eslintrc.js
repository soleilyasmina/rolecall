module.exports = {
  env: {
    commonjs: true,
    node: true,
  },
  extends: ["airbnb-base"],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    quotes: ["error", "double"],
    "no-underscore-dangle": [
      "error",
      { allow: ["SALT_ROUNDS"], allowAfterThis: true },
    ],
  },
};
