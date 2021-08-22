const mongoose = require("mongoose");

const CommentSchema = mongoose.Schema({
  authorId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  projectId: { type: mongoose.Schema.Types.ObjectId, ref: "Project" },
  text: String,
  parentId: { type: mongoose.Schema.Types.ObjectId, ref: "Comment", default: null },
  date: { type : Date, default: Date.now }
});

module.exports = mongoose.model("Comment", CommentSchema);
