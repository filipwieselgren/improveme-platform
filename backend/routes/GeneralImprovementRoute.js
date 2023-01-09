const express = require("express");
const router = express.Router();
const app = express();
const cors = require("cors");
app.use(cors());

const GeneralImprovementModel = require("../models/GeneralImprovement.js");
const CountGeneralImprovementModel = require("../models/CountGeneralImprovement");

router.patch("/generalimprovement/:id", async (req, res) => {
  const user_id = req.params.id;

  const assignedTo = req.body.assignedTo;
  const status = req.body.status;
  const approved = req.body.approved;
  const updateImprovement = await GeneralImprovementModel.findByIdAndUpdate(
    {
      _id: user_id,
    },
    { $set: { assignedTo, status: status, approved: approved } }
  );

  res.status(200).send(updateImprovement);
});

router.delete("/generalimprovement/:id", async (req, res) => {
  const user_id = req.params.id;
  const deleteImprovement = await GeneralImprovementModel.findByIdAndDelete({
    _id: user_id,
  });

  res.status(204).send(deleteImprovement);
});

router.post("/generalimprovement", async (req, res) => {
  const countGeneralImprovementModel = new CountGeneralImprovementModel(
    req.body
  );

  await countGeneralImprovementModel.save();

  res.status(201).send(countGeneralImprovementModel);
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
