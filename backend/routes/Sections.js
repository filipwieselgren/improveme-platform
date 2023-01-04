const express = require("express");
const router = express.Router();
const app = express();
const cors = require("cors");
app.use(cors());

const sectionModel = require("../models/Section.js");

router.post("/section", async (req, res) => {
  const section = {
    section: "part2",
  };
  const createPart = new sectionModel(section);

  await createPart.save();

  console.log(createPart);

  res.status(201).send(createPart);
});

module.exports = router;
