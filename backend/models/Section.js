const mongoose = require("mongoose");
const FeatureRequestModel = require("./FeatureRequest");

const sectionSchema = new mongoose.Schema({
  section: { type: String, required: true },
  featureRequest: [
    {
      _id: String,
      description: { type: String, required: true },
      solvesWhat: { type: String, required: true },
      part: { type: String, required: true },
      email: { type: String, required: false },
      approved: Boolean,
      status: String,
      assignedTo: String,
    },
  ],
  bugs: [
    {
      description: { type: String, required: true },
      background: { type: String, required: true },
      part: { type: String, required: true },
      reproduce: { type: String, required: true },
      files: Array,
      email: { type: String, required: false },
      approved: Boolean,
      status: String,
      assignedTo: String,
    },
  ],
  genralImprovments: [
    {
      description: { type: String, required: true },
      reason: { type: String, required: true },
      part: { type: String, required: true },
      email: { type: String, required: false },
      approved: Boolean,
      status: String,
      assignedTo: String,
    },
  ],
});

const sectionModel = mongoose.model("sections", sectionSchema);

module.exports = sectionModel;
