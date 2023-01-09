const express = require("express");
const router = express.Router();
const app = express();
const cors = require("cors");
app.use(cors());
const utils = require("../utils.js");
const passport = require("passport");

const UserModel = require("../models/User.js");

router.post("/register", async (req, res) => {
  const { fullName, userName, password } = req.body;

  // Kolla om man kan skapa en användare med samma användarnamn om man använder ett nytt fullName
  UserModel.findOne({ userName }, async (err, user) => {
    if (user) {
      res.send("Username already exists");
    } else {
      const newUser = new UserModel({
        fullName,
        userName,
        hashedPassword: utils.hashedPassword(password),
      });

      await newUser.save();
      res.send(newUser);
    }
  });
});

module.exports = router;
