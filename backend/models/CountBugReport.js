const mongoose = require("mongoose");

const countBugreportSchema = new mongoose.Schema({
  description: { type: String, required: true },
  background: { type: String, required: true },
  part: { type: String, required: true },
  reproduce: { type: String, required: true },
  files: Array,
  email: { type: String, required: false },
  approved: Boolean,
  status: String,
  assignedTo: String,
});

const CountBugReportModel = mongoose.model(
  "count-fixed-brs",
  countBugreportSchema
);

module.exports = CountBugReportModel;
