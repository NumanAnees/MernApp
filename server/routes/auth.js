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
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
