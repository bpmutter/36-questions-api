const express = require("express");
const router = express.Router();
const { asyncHandler } = require("../utils");
const Question = require("../db/models/question");

const questionsList = [
  { number: 1, question: "wassup?" },
  { number: 2, question: "que tal?" },
];

router.get(
  "/",
  asyncHandler(async (req, res) => {
    questions = await Question.find({});
    res.json({ questions });
  })
);

router.get(
  "/:number",
  asyncHandler(async (req, res) => {
    const number = parseInt(req.params.number);

    question = await Question.findOne({ number: number });
    question
      ? res.status(200).json({ question })
      : res.status(404).json({ error: "no question at selected number" });
  })
);

module.exports = router;
