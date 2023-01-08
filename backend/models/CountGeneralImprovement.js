const mongoose = require("mongoose");

const countGeneralImprovmentSchema = new mongoose.Schema({
  description: { type: String, required: true },
  reason: { type: String, required: true },
  part: { type: String, required: true },
  email: { type: String, required: false },
  approved: Boolean,
  status: String,
  assignedTo: String,
});

const CountGeneralImprovmentModel = mongoose.model(
  "count-fixed-gis",
  countGeneralImprovmentSchema
);

module.exports = CountGeneralImprovmentModel;
