const express = require("express");
const app = express();
mongoose = require("mongoose");
const cors = require("cors");

app.use(cors());

app.use(express.json());

const allErrends = require("./routes/AllErrendsRoute.js");

app.use("/api/v1", allErrends);

const port = 8000;
app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
