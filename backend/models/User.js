const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullName: { type: String },
  userName: { type: String },
  hashedPassword: { type: String },
});

const UserModel = mongoose.model("users", userSchema);

module.exports = UserModel;
