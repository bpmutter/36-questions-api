const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const questionsRouter = require("./routes/questions");
const mongoose = require("mongoose");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const PORT = process.env.PORT || 8080;
const DB_URI = process.env.DB_URI;

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose
  .connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.log(err));

//routes for questions
app.use("/questions", questionsRouter);

// Generic error handler.
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  const isProduction = environment === "production";
  res.json({
    title: err.title || "Server Error",
    message: err.message,
    errors: err.errors,
    stack: isProduction ? null : err.stack,
  });
});

app.listen(PORT, () =>
  console.log(
    `server started at: ${new Date()}`,
    `\nlistening on port: ${PORT}`,
    `\nenvironment is: ${process.env.NODE_ENV}`
  )
);
