const express = require("express");

const app = express();

///routes
app.get("/", (req, res) => {
  res.send("we are live");
});

app.listen(3000);
