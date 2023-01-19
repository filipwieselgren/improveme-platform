const express = require("express");
const router = express.Router();
const app = express();
const cors = require("cors");
app.use(cors());
const utils = require("../utils.js");
const passport = require("passport");
const jwt = require("jsonwebtoken");

const UserModel = require("../models/User.js");

const verifyJWT = (req, res, next) => {
  const token = req.headers["x-access-token"];

  if (!token) {
    res.send("Token is not verified");
  } else {
    jwt.verify(token, process.env.JWTSECRET, (err, decoded) => {
      if (err) {
        console.log(err);
        res.json({ auth: false, message: "Authentication faild" });
      } else {
        req.userId = decoded.id;
        next();
      }
    });
  }
};

router.get("/auth", verifyJWT, (req, res) => {
  res.status(200).json("You are authenticated");
});

//LOGGA IN
router.post("/login", async (req, res) => {
  const { userName, password } = req.body;

  UserModel.findOne({ userName }, (err, user) => {
    if (user && utils.comparePassword(password, user.hashedPassword)) {
      //Login correct

      const id = user._id;
      const userData = {
        userId: user._id,
        userName,
      };

      const token = jwt.sign({ id: id }, process.env.JWTSECRET, {
        expiresIn: 300,
      });
      // res.cookie("token", token);
      res.status(200).json({ auth: true, token: token, userData: userData });
    } else if (!user) {
      const wrongUser = { txt: "Username is incorrect." };
      res.status(404).send(wrongUser);
    } else if (!utils.comparePassword(password, user.hashedPassword)) {
      const wrongPassword = { txt: "Password is incorrect." };
      res.status(404).send(wrongPassword);
    }
  });
});

router.post("/register", async (req, res) => {
  // const { fullName, userName, password } = req.body;
  const { userName, pwd } = req.body;

  UserModel.findOne({ userName }, async (err, user) => {
    if (user) {
      const userExist = true;
      res.status(409).send(userExist);
      return;
    } else {
      const newUser = new UserModel({
        // fullName,
        userName,
        hashedPassword: utils.hashedPassword(pwd),
      });

      await newUser.save();
      res.status(201).send(newUser);
    }
  });
});

module.exports = router;
