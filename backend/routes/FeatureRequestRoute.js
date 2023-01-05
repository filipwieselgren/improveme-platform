const express = require("express");
const router = express.Router();
const app = express();
const cors = require("cors");
app.use(cors());
const { ObjectId } = require("mongodb");

const FeatureRequestModel = require("../models/FeatureRequest");

router.patch("/featurerequest/:id", async (req, res) => {
  const user_id = req.params.id;

  const assignedTo = req.body.assignedTo;
  const status = req.body.status;
  console.log("status:", status);
  const updateRequest = await FeatureRequestModel.findByIdAndUpdate(
    {
      _id: user_id,
    },
    { $set: { assignedTo, status: status } }
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

// router.patch("/approvefeaturerequest/:id", async (req, res) => {
//   const user_id = req.params.id;
//   const approved = true;
//   const findRequest = await FeatureRequestModel.findByIdAndUpdate(
//     {
//       _id: user_id,
//     },
//     { $set: { approved } }
//   );

//   console.log("findRequest:", findRequest);
//   res.status(200).send(findRequest);
// });

module.exports = router;
