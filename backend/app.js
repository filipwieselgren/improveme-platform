const express = require("express");
const app = express();
mongoose = require("mongoose");
const cors = require("cors");

app.use(cors());

app.use(express.json());

const allErrends = require("./routes/AllErrendsRoute.js");
const postSection = require("./routes/SectionsRoute.js");
const patchFeatureRequest = require("./routes/FeatureRequestRoute.js");
const patchGeneralImprovement = require("./routes/GeneralImprovementRoute.js");
const patchBugReport = require("./routes/BugReportRoute.js");
const login = require("./routes/LoginRoute.js");

app.use("/api/v1", allErrends);
app.use("/api/v1", postSection);
app.use("/api/v1", patchFeatureRequest);
app.use("/api/v1", patchGeneralImprovement);
app.use("/api/v1", patchBugReport);
app.use("/api/v1", login);

const port = 8000;
app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
