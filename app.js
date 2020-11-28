const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");
const app = express();

///middlewares

///routes
app.get("/", (req, res) => {
  res.send("we are live");
});
app.get("/posts", (req, res) => {
  res.send("we are live");
});

////connect to DB
mongoose.connect(process.env.DB_CONNECTION, { userNewUrlParser: true }, () => {
  console.log("connected to DB");
});
app.listen(3000);
