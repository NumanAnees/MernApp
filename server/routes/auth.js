const express = require("express");
const router = express.Router();
require("../DB/connection");
const User = require("../Models/userSchema");

router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;
  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({
      error: "plz fill all the fields",
    });
  }

  try {
    const response = await User.findOne({ email: email });

    if (response) {
      return res.status(422).json({
        message: "User already exist",
      });
    }
    const user = new User({
      name,
      email,
      phone,
      work,
      password,
      cpassword,
    });
    await user.save();

    res.status(201).json({
      message: "User created successfully",
    });
  } catch (err) {
    console.log(err);
  }
});

router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(422).json({
        error: "plz enter correct email and password",
      });
    }
    const response = await User.findOne({ email: email });
    if (response) {
      if (response.password === password) {
        return res.status(200).json({
          message: "You loggedIn successfully",
        });
      }
      res.json({
        message: "Enter a valid password",
      });
    }
    res.status(422).json({
      error: "Invalid Email",
    });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
