const express = require("express");
const router = express.Router();

const {
  createResume,
  getLatestResume,
} = require("../controllers/resumeController");

router.post("/create", createResume);

router.get("/latest", getLatestResume);

module.exports = router;