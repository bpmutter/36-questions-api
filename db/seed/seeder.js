//NOTE: USE ONLY ONCE TO SEED DB

const seedData = require("./36_questions.json");
const Question = require("../models/question");
const mongoose = require("mongoose");

mongoose
  .connect("ADD URI HERE", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.log(err));

Question.collection.insertMany(seedData, (err, result) => {
  if (err) return console.error(err);
  else console.log(result);
});
