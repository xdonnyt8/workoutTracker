//Setting constant variables
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const PORT = process.env.PORT || 3000;
const db = require("./model")
const app = express();



app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
const routes = require("./routes/api.js");
app.use(routes)


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
