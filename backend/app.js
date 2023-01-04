const express = require("express");
const app = express();
mongoose = require("mongoose");
const cors = require("cors");

app.use(cors());

app.use(express.json());

const FeatureRequestModel = require("./models/FeatureRequest.js");
const BugReportModel = require("./models/BugReport.js");
const GeneralImprovmentModel = require("./models/GeneralImprovement.js");

app.get("/api/v1/errend", async (req, res) => {
  const getFeatureRequests = await FeatureRequestModel.find();
  const getBugReports = await BugReportModel.find();
  const getGeneralImprovements = await GeneralImprovmentModel.find();

  const errend = { getFeatureRequests, getBugReports, getGeneralImprovements };

  console.log("errend:", errend);

  res.status(200).send(errend);
});

const port = 8000;
app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
