// Many thanks to Owen Roth for demoing this code (and all the rest of the auth code here) for me during bootcamp!

const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");

// Get the secret HASH seed
let jwtENV;
if (process.env.NODE_ENV !== "production") {
    jwtENV = config.get("jwtSecret");
  } else {
    jwtENV = process.env.JWT_SECRET;
  }

  
const User = require("../models/Users");
router.get("/", auth, async (req, res) => {
    try {
      const user = await User.findById(req.user.id).select("-password");
      res.json(user);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  });

  router.post(
    "/",
    [
      check("email", "Please include a valid email").isEmail(),
      check("password", "Password is required").exists(),
    ],
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      const { email, password } = req.body;
  
      try {
        let user = await User.findOne({ email });
  
        if (!user) {
          return res.status(400).json({ msg: "Invalid Credentials" });
        }
  
        const isMatch = await bcrypt.compare(password, user.password);
  
        if (!isMatch) {
          return res.status(400).json({ msg: "Invalid Credentials" });
        }
  
        const payload = {
          user: {
            id: user.id,
          },
        };
  
        jwt.sign(
          payload,
          jwtENV,
          {
            expiresIn: 3600,
          },
          (err, token) => {
            if (err) throw err;
            res.json({ token });
          }
        );
      } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
      }
    }
  );
  
  module.exports = router;
  