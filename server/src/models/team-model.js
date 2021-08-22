const mongoose = require("mongoose");

const TeamSchema = mongoose.Schema({
  name: { type: String },
  users: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  projects: [{ type: mongoose.Schema.Types.ObjectId, ref: "Project" }],
  about: { type: String },
});

module.exports = mongoose.model("Team", TeamSchema);
