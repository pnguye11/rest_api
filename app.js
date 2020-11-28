const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");
const app = express();

///middlewares
const postsRoute = require("./routes/posts");

app.use(bodyParser.json());
app.use("/posts", postsRoute);
///routes
app.get("/", (req, res) => {
  res.send("we are live");
});

////connect to DB
mongoose.connect(process.env.DB_CONNECTION, { userNewUrlParser: true }, () => {
  console.log("connected to DB");
});
app.listen(3000);
