const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  number: Number,
  question: String,
});
module.exports = mongoose.model("Question", questionSchema);
