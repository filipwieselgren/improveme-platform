const express = require("express");
const router = express.Router();
const app = express();
const cors = require("cors");
app.use(cors());
const bodyParser = require("body-parser");
app.use(bodyParser.json({ limit: "10mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));

const BugReportModel = require("../models/BugReport.js");
const CountBugReportModel = require("../models/CountBugReport");
router.patch("/bugreport/:id", async (req, res) => {
  const user_id = req.params.id;

  const assignedTo = req.body.assignedTo;
  const status = req.body.status;
  const updateBugReport = await BugReportModel.findByIdAndUpdate(
    {
      _id: user_id,
    },
    { $set: { assignedTo, status: status } }
  );

  res.status(200).send(updateBugReport);
});

router.delete("/bugreport/:id", async (req, res) => {
  const user_id = req.params.id;
  const deleteBugReport = await BugReportModel.findByIdAndDelete({
    _id: user_id,
  });

  res.status(204).send(deleteBugReport);
});

router.post("/bugreport", async (req, res) => {
  const countBugReportModel = new CountBugReportModel(req.body);

  await countBugReportModel.save();

  res.status(201).send(countBugReportModel);
});

module.exports = router;
