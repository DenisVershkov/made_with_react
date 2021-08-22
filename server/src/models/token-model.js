const mongoose = require("mongoose");

const TokenSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  refreshToken: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Token", TokenSchema);
