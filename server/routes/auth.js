const express = require("express");
const router = express.Router();
require("../DB/connection");
const User = require("../Models/userSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

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
    } else if (cpassword != password) {
      return res.status(422).json({
        message: "Password not matched",
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
      const isMatch = await bcrypt.compare(password, response.password);
      if (isMatch) {
        const token = await response.generateToken();
        res.cookie("jwtoken", token, {
          expires: new Date(Date.now() + 10000),
          httpOnly: true,
        });
        return res.status(200).json({
          message: "You loggedIn successfully",
        });
      }
      return res.status(422).json({
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
