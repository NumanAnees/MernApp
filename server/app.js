const mongoose = require("mongoose");
const express = require("express");
const app = express();

const DB =
  "mongodb+srv://Numan:someonehackedit@cluster0.buapl.mongodb.net/MernApp?retryWrites=true&w=majority";

mongoose
  .connect(DB)
  .then(() => {
    console.log("connection successfull");
  })
  .catch((e) => {
    console.log(e);
  });
app.get("/About", (req, res) => {
  res.send("hello from the about");
});
app.get("/Contact", (req, res) => {
  res.send("hello from the contact");
});
app.get("/Signin", (req, res) => {
  res.send("hello from the Signin");
});
app.get("/Singup", (req, res) => {
  res.send("hello from the Singnup");
});

app.listen(3000, () => {
  console.log("server is running at port 3000");
});
