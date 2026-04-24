const Resume = require("../models/Resume");

exports.createResume = async (req, res) => {
  try {
    const newResume = new Resume(req.body);
    await newResume.save();

    res.status(201).json({
      message: "Resume saved successfully",
      data: newResume,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error saving resume",
      error,
    });
  }
};

exports.getLatestResume = async (req, res) => {
  try {
    const latestResume = await Resume.findOne().sort({
      _id: -1,
    });

    res.status(200).json(latestResume);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching resume",
      error,
    });
  }
};