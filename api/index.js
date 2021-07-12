const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const bodyParser = require("body-parser");
require("dotenv").config();

require("./db");
const api = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(logger("dev"));

app.use("/api", api);

/* eslint-disable-next-line no-console */
app.listen(PORT, () => console.log(`Server listening on port ${PORT}!`));
