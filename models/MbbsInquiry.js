const mongoose = require("mongoose");

const MbbsInquirySchema = new mongoose.Schema({
 name: {
  type: String,
  required: true,
 },
 contactDetail: {
  type: String,
  required: true,
 },
 city: {
  type: String,
  required: true,
 },
 state: {
  type: String,
  enum: [
   "Karnataka",
   "Jammu and Kashmir",
   "Uttarakhand",
   "Arunachal Pradesh",
   "Meghalaya",
   "Himachal Pradesh",
   "Gujarat",
   "Assam",
   "Dadra and Nagar Haveli",
   "Kerala",
   "West Bengal",
   "Maharashtra",
   "Madhya Pradesh",
   "Delhi",
   "Rajasthan",
   "Bihar",
   "Sikkim",
   "Tamil Nadu",
   "Orissa",
   "Goa",
   "Andhra Pradesh",
   "Telangana",
   "Chhattisgarh",
   "Mizoram",
   "Punjab",
   "Jharkhand",
   "Uttar Pradesh",
  ],
  required: true,
 },
 budget: {
  type: String,
  enum: [
   "Below 50 lakhs",
   "50-70 lakhs",
   "70-90 lakhs",
   "90-110 lakhs",
   "No issues with budget",
  ],
  required: true,
 },
 createdAt: {
  type: Date,
  default: Date.now,
 },
});

module.exports = mongoose.model("MbbsInquiry", MbbsInquirySchema);
