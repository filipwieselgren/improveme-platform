const express = require("express");
const router = express.Router();
const app = express();
const cors = require("cors");
app.use(cors());
const utils = require("../utils.js");
const passport = require("passport");
const jwt = require("jsonwebtoken");

const UserModel = require("../models/User.js");

//Om man inte är inloggad

// const forceAuthorize = (req, res, next) => {
//   console.log("forceAuthorize");
//   const { userName, password } = req.body;
//   const { token } = req.cookies;

//   if (
//     (token && jwt.verify(token, process.env.JWTSECRET)) ||
//     (userName && password)
//   ) {
//     next();
//   } else {
//     res.status(401).send("unauthorized");
//   }
// };

//LOGGA IN
// router.post("/login", forceAuthorize, async (req, res) => {
//   const { userName, password } = req.body;

//   UserModel.findOne({ userName }, (err, user) => {
//     if (user && utils.comparePassword(password, user.hashedPassword)) {
//       //Login correct
//       const userData = {
//         userId: user._id,
//         userName,
//       };

//       const accessToken = jwt.sign(userData, process.env.JWTSECRET);
//       res.cookie("token", accessToken);
//       res.send(accessToken);
//     } else {
//       res.send("unauthorized");
//     }
//   });
// });

router.post("/register", async (req, res) => {
  // const { fullName, userName, password } = req.body;
  const { userName, pwd } = req.body;

  console.log("userName:", userName);
  console.log("password:", pwd);

  UserModel.findOne({ userName }, async (err, user) => {
    if (user) {
      console.log("Username already exists");
      res.status(409).send("Username already exists");
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
