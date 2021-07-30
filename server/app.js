const mongoose = require("mongoose");
const dotenv = require("dotenv");
const express = require("express");
const app = express();
dotenv.config({ path: "./config.env" });
const PORT = process.env.PORT;
const DB = process.env.DB;
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
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

app.listen(PORT, () => {
  console.log("server is running at port " + PORT);
});
