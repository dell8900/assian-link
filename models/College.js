const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
 course: String,
 totalFees: String,
 firstYearFees: String,
 hostel: String,
 food: String,
});

const collegeSchema = new mongoose.Schema(
 {
  collegename: { type: String, required: true },
  established: String,
  collegetype: String,
  location: String,
  approval: String,
  address: String,
  state: String,
  city: String,
  affiliatedby: String,
  collegecategory: String,
  pdf: String,
  courses: [courseSchema],
  cutoffdata: String,
  website: String,
  mail: String,
  image1: String,
  image2: String,
  universityDescription: String,
 },
 { timestamps: true }
);

module.exports = mongoose.model("College", collegeSchema);
