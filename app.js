const express = require("express");
const app = express();

app.get("/About", (req, res) => {
  res.send("hello from the about");
});
app.get("/Contact", (req, res) => {
  res.send("hello from the contact");
});
app.listen(3000, () => {
  console.log("server is running at port 3000");
});
