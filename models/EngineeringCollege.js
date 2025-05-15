const mongoose = require("mongoose");

// Course subdocument schema
const courseSchema = new mongoose.Schema(
 {
  name: String,
  duration: String,
  eligibility: String,
  fees: String,
 },
 { _id: false }
);

// Placement subdocument schema
const placementSchema = new mongoose.Schema(
 {
  averagePackage: String,
  highestPackage: String,
  companiesVisited: [String],
 },
 { _id: false }
);

// FAQ subdocument schema
const faqSchema = new mongoose.Schema(
 {
  question: String,
  answer: String,
 },
 { _id: false }
);

// Cutoff data subdocument schema
const cutoffSchema = new mongoose.Schema(
 {
  branch: String,
  year: Number,
  closingRank: String,
 },
 { _id: false }
);

// MAIN ENGINEERING COLLEGE SCHEMA
const engineeringCollegeSchema = new mongoose.Schema(
 {
  collegename: String,
  established: String,
  collegetype: String,
  location: String,
  approval: [String],
  address: String,
  state: String,
  city: String,
  affiliatedby: String,
  collegecategory: String,
  universityDescription: String,
  image1: String,
  image2: String,
  website: String,
  mail: String,
  pdf: String,
  highlights: [String],
  facilities: [String],
  specializations: [String],
  courses: [courseSchema],
  cutoffdata: [cutoffSchema],
  admissionProcess: [String],
  entranceExams: [String],
  hostelFacilities: {
   boys: mongoose.Schema.Types.Mixed, // ✅ Accepts object or string
   girls: mongoose.Schema.Types.Mixed, // ✅ Accepts object or string
  },
  scholarships: [String],
  placements: placementSchema,
  ranking: mongoose.Schema.Types.Mixed, // ✅ Accepts object or string
  faq: [faqSchema],
 },
 { timestamps: true }
);

module.exports = mongoose.model("EngineeringCollege", engineeringCollegeSchema);
