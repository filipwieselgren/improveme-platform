const mongoose = require("mongoose");
const FeatureRequestModel = require("./FeatureRequest");

const sectionSchema = new mongoose.Schema({
  section: { type: String, required: true },
});

const sectionModel = mongoose.model("sections", sectionSchema);

module.exports = sectionModel;
