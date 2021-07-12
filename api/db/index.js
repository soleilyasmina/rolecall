const mongoose = require("mongoose");

const MONGODB_URI = process.env.PROD_MONGODB || "mongodb://127.0.0.1:27017/rolecall_development";
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}

mongoose
  .connect(MONGODB_URI, options)
  .then(() => console.log("Successfully connected to MongoDB!"))
  .catch((e) => console.log(`MongoDB connection error: ${e.message}`));

module.exports = mongoose.connection;
