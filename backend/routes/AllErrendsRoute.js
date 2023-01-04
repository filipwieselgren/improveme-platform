const express = require("express");
const router = express.Router();
const app = express();
const cors = require("cors");
app.use(cors());

const FeatureRequestModel = require("../models/FeatureRequest.js");
const BugReportModel = require("../models/BugReport.js");
const GeneralImprovmentModel = require("../models/GeneralImprovement.js");

router.get("/errend", async (req, res) => {
  const getFeatureRequests = await FeatureRequestModel.find();
  const getBugReports = await BugReportModel.find();
  const getGeneralImprovements = await GeneralImprovmentModel.find();

  const errend = { getFeatureRequests, getBugReports, getGeneralImprovements };

  console.log("errend:", errend);

  res.status(200).send(errend);
});

module.exports = router;
