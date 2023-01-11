const express = require("express");
const router = express.Router();
const app = express();
const cors = require("cors");
app.use(cors());

const FeatureRequestModel = require("../models/FeatureRequest.js");
const BugReportModel = require("../models/BugReport.js");
const GeneralImprovmentModel = require("../models/GeneralImprovement.js");
const CountFeatureRequestModel = require("../models/CountFeatureRequest");
const CountBugReportModel = require("../models/CountBugReport");
const CountGeneralImprovementModel = require("../models/CountGeneralImprovement");

router.get("/errend", async (req, res) => {
  const getFeatureRequests = await FeatureRequestModel.find();
  const getBugReports = await BugReportModel.find();
  const getGeneralImprovements = await GeneralImprovmentModel.find();
  const getCountFeatureRequests = await CountFeatureRequestModel.find();
  const getCountBugReports = await CountBugReportModel.find();
  const getCountGeneralImprovements = await CountGeneralImprovementModel.find();

  const featureRequestSections = [];
  const generalImprovementSections = [];

  getFeatureRequests.forEach((item) => {
    const group = featureRequestSections.find((g) => g.part === item.part);
    if (group) {
      group.requests.push(item);
    } else {
      featureRequestSections.push({ part: item.part, requests: [item] });
    }

    console.log("backend");
  });

  getGeneralImprovements.forEach((item) => {
    const group = generalImprovementSections.find((g) => g.part === item.part);
    if (group) {
      group.requests.push(item);
    } else {
      generalImprovementSections.push({ part: item.part, requests: [item] });
    }
  });

  const errend = {
    getFeatureRequests,
    getBugReports,
    getGeneralImprovements,
    getCountFeatureRequests,
    getCountBugReports,
    getCountGeneralImprovements,
    featureRequestSections,
    generalImprovementSections,
  };

  res.status(200).send(errend);
});

module.exports = router;
