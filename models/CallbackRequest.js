const mongoose = require("mongoose");

const callbackRequestSchema = new mongoose.Schema(
 {
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  mobile: { type: String, required: true },
  description: { type: String, required: true },
 },
 { timestamps: true }
);

module.exports = mongoose.model("CallbackRequest", callbackRequestSchema);
