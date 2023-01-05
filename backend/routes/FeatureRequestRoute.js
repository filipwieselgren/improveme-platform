const express = require("express");
const router = express.Router();
const app = express();
const cors = require("cors");
app.use(cors());
const { ObjectId } = require("mongodb");

const FeatureRequestModel = require("../models/FeatureRequest");

router.patch("/assignfeaturerequest/:id", async (req, res) => {
  const user_id = req.params.id;
  const assignedTo = req.body.assignedTo;
  const findRequest = await FeatureRequestModel.findByIdAndUpdate(
    {
      _id: user_id,
    },
    { $set: { assignedTo } }
  );

  console.log("findRequest:", findRequest);
  res.status(200).send(findRequest);
});

router.patch("/statusfeaturerequest/:id", async (req, res) => {
  const user_id = req.params.id;
  const status = req.body.assignedTo;
  const findRequest = await FeatureRequestModel.findByIdAndUpdate(
    {
      _id: user_id,
    },
    { $set: { status } }
  );

  console.log("findRequest:", findRequest);
  res.status(200).send(findRequest);
});
router.patch("/approvefeaturerequest/:id", async (req, res) => {
  const user_id = req.params.id;
  const approved = true;
  const findRequest = await FeatureRequestModel.findByIdAndUpdate(
    {
      _id: user_id,
    },
    { $set: { approved } }
  );

  console.log("findRequest:", findRequest);
  res.status(200).send(findRequest);
});

module.exports = router;
