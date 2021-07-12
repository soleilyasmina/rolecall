const { model, Schema } = require("mongoose");
const { hashSync } = require("bcrypt");

const { SALT_ROUNDS } = process.env;
const salts = parseInt(SALT_ROUNDS, 10);

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    min: [4, "Username is too short!"],
    max: [16, "Username is too long!"],
  },
  password_digest: { type: String, required: true },
  email: {
    type: String,
    required: true,
    validate: {
      validator: (email) => /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(email),
      message: "Email validation failed!",
    },
  },
}, {
  timestamps: true,
});

userSchema.pre("save", function hash(next) {
  if (!this.isModified("password_digest")) return next();
  this.password_digest = hashSync(this.password_digest, salts);
  return next();
});

userSchema.pre("findOneAndUpdate", async function hash() {
  const doc = await this.model.findOne(this.getQuery());
  if (this._update.password_digest && doc.password_digest !== this._update.password_digest) {
    this._update.password_digest = hashSync(this._update.password_digest, salts);
  }
});

module.exports = model("users", userSchema);
