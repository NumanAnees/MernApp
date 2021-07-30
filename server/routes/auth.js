const express = require("express");
const router = express.Router();
require("../DB/connection");
const User = require("../Models/userSchema");

router.post("/register", (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;
  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({
      error: "plz fill all the fields",
    });
  }
  User.findOne({ email: email })
    .then((response) => {
      if (response) {
        return res.status(422).json({
          message: "User already exist",
        });
      }
      const user = new User({ name, email, phone, work, password, cpassword });
      user
        .save()
        .then(() => {
          res.status(201).json({
            message: "User created successfully",
          });
        })
        .catch((e) => {
          res.status(500).json({
            error: "Failed to register",
          });
        });
    })
    .catch((e) => {
      res.status(500).json({
        error: "Failed to register",
      });
    });
});

module.exports = router;
