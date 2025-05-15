const mongoose = require("mongoose");

const PgInquirySchema = new mongoose.Schema(
 {
  name: { type: String, required: true },
  contactDetail: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  neetPgScore: { type: Number },
  branch: [{ type: String }], // multiple choice
  budget: { type: String, required: true }, // dropdown values
 },
 { timestamps: true }
);

module.exports = mongoose.model("PgInquiry", PgInquirySchema);
