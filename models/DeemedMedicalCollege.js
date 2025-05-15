const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
 {
  name: String,
  duration: String,
  eligibility: String,
  fees: mongoose.Schema.Types.Mixed, // can be string or object (e.g. {inr, nri, hostel})
 },
 { _id: false }
);

const cutoffSchema = new mongoose.Schema(
 {
  exam: String,
  expectedCutoff: String,
 },
 { _id: false }
);

const faqSchema = new mongoose.Schema(
 {
  question: String,
  answer: String,
 },
 { _id: false }
);

const placementSchema = new mongoose.Schema(
 {
  averagePackage: String,
  highestPackage: String,
  companiesVisited: mongoose.Schema.Types.Mixed, // could be a number or array
 },
 { _id: false }
);

const deemedMedicalCollegeSchema = new mongoose.Schema(
 {
  collegename: String,
  established: String,
  collegetype: String,
  location: String,
  address: String,
  approval: [String],
  state: String,
  city: String,
  affiliatedby: String,
  collegecategory: String,
  universityDescription: String,
  highlights: [String],
  image1: String,
  image2: String,
  website: String,
  mail: String,
  pdf: String,
  courses: [courseSchema],
  cutoffdata: [cutoffSchema],
  admissionProcess: [String],
  entranceExams: [String],
  hostelFacilities: mongoose.Schema.Types.Mixed, // can be boolean or detailed object later
  scholarships: mongoose.Schema.Types.Mixed, // can be boolean or array
  placements: placementSchema,
  ranking: mongoose.Schema.Types.Mixed,
  faq: [faqSchema],
 },
 { timestamps: true }
);

module.exports = mongoose.model(
 "DeemedMedicalCollege",
 deemedMedicalCollegeSchema
);
