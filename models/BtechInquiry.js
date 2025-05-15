const mongoose = require("mongoose");

const BtechInquirySchema = new mongoose.Schema({
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
  required: true,
 },
 preferredStates: {
  type: [String],
  enum: [
   "AKTU",
   "IPU",
   "Maharastra colleges",
   "Bangalore colleges",
   "Deemed Universities",
   "Others",
  ],
  required: true,
 },
 expectedBudget: {
  type: [String],
  enum: [
   "No donation",
   "Donation",
   "Below 10 lakhs",
   "10-15 lakhs",
   "15-25 lakhs",
   "No issues with budget",
  ],
  required: true,
 },
 createdAt: {
  type: Date,
  default: Date.now,
 },
});

module.exports = mongoose.model("BtechInquiry", BtechInquirySchema);
