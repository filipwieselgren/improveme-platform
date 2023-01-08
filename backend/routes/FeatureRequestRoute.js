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

router.post("/featurerequest", async (req, res) => {
  const countFeatureRequest = new CountFeatureRequestModel(req.body);

  await countFeatureRequest.save();

  res.status(201).send(countFeatureRequest);
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
