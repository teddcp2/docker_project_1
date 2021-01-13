const express = require("express");

app = express();

app.get("/", (req, res) => {
  console.log(req, res);
  res.send("Welcome to Express app ... running via docker");
});

app.listen(80, () => console.log("Listening on port 80.."));
