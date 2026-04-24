const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  phone: String,
  address: String,
  objective: String,
  education: String,
  skills: String,
  experience: String,
  projects: String,
  certifications: String,
  languages: String,
  hobbies: String,
});

module.exports = mongoose.model("Resume", resumeSchema);