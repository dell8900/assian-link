const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
 {
  course: String,
  branch: String,
  totalSeat: mongoose.Schema.Types.Mixed,
  courseDuration: String,
  tuitionFee: String,
 },
 { _id: false }
);

const nepalMedicalCollegeSchema = new mongoose.Schema(
 {
  collegename: String,
  established: String,
  collegetype: String,
  location: String,
  approval: String,
  address: String,
  state: String,
  city: String,
  affiliatedby: String,
  collegecategory: String,
  universityDescription: String, // contains HTML
  pdf: String,
  courses: [courseSchema],
  cutoffdata: [mongoose.Schema.Types.Mixed], // kept flexible
  website: String,
  mail: String,
  image1: String,
  image2: String,
 },
 { timestamps: true }
);

module.exports = mongoose.model(
 "NepalMedicalCollege",
 nepalMedicalCollegeSchema
);
