const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  content: {
    type: String,
    required: true,
  },
  createAt: {
    type: Date,
    default: () => Date.now(),
  },
});

module.exports = mongoose.model("Article", articleSchema);
