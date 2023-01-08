const mongoose = require("mongoose");

const { ObjectId } = require("mongodb");

const countFeaturerequestSchema = new mongoose.Schema({
  description: { type: String, required: true },
  solvesWhat: { type: String, required: true },
  part: { type: String, required: true },
  email: { type: String, required: false },
  approved: Boolean,
  status: String,
  assignedTo: String,
});

const CountFeatureRequestModel = mongoose.model(
  "count-fixed-frs",
  countFeaturerequestSchema
);

module.exports = CountFeatureRequestModel;
