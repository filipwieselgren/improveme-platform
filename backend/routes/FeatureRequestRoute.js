const express = require("express");
const router = express.Router();
const app = express();
const cors = require("cors");
app.use(cors());

const FeatureRequestModel = require("../models/FeatureRequest");
const CountFeatureRequestModel = require("../models/CountFeatureRequest");

router.patch("/featurerequest/:id", async (req, res) => {
  const user_id = req.params.id;

  const assignedTo = req.body.assignedTo;
  const status = req.body.status;
  const approved = req.body.approved;
  const updateRequest = await FeatureRequestModel.findByIdAndUpdate(
    {
      _id: user_id,
    },
    { $set: { assignedTo, status: status, approved: approved } }
  );

  res.status(200).send(updateRequest);
});

router.delete("/featurerequest/:id", async (req, res) => {
  const user_id = req.params.id;
  const deleteRequest = await FeatureRequestModel.findByIdAndDelete({
    _id: user_id,
  });

  res.status(204).send(deleteRequest);
});

router.post("/featurerequest", async (req, res) => {
  const countFeatureRequest = new CountFeatureRequestModel(req.body);

  await countFeatureRequest.save();

  res.status(201).send(countFeatureRequest);
});

module.exports = router;
