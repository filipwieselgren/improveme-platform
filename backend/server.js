const mongoose = require("mongoose");
require("dotenv").config();
const app = require("./app");

const DBKEY = process.env.MONGODB_URI;

mongoose
  .connect(DBKEY, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("DB connected");
  });
