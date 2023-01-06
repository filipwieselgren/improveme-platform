const express = require("express");
const router = express.Router();
const app = express();
const cors = require("cors");
app.use(cors());

const sectionModel = require("../models/Section.js");
const FeatureRequestModel = require("../models/FeatureRequest.js");
const BugReportModel = require("../models/BugReport.js");
const GeneralImprovmentModel = require("../models/GeneralImprovement.js");

router.post("/section", async (req, res) => {
  const createPart = new sectionModel(req.body);

  await createPart.save();

  console.log(createPart);

  res.status(201).send(createPart);
});
router.get("/section", async (req, res) => {
  const getFeatureRequests = await FeatureRequestModel.find();
  const getBugReports = await BugReportModel.find();
  const getGeneralImprovements = await GeneralImprovmentModel.find();
  const getSections = await sectionModel.find();

  res.status(201).send(getSections);
});

module.exports = router;
