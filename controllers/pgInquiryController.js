const PgInquiry = require("../models/PgInquiry");

// Create PG Inquiry
exports.createPgInquiry = async (req, res) => {
 const { name, contactDetail, city, state, neetPgScore, branch, budget } =
  req.body;

 if (!name || !contactDetail || !city || !state || !budget) {
  return res
   .status(400)
   .json({ message: "All fields marked with * are required." });
 }

 try {
  const newInquiry = new PgInquiry({
   name,
   contactDetail,
   city,
   state,
   neetPgScore,
   branch,
   budget,
  });

  const saved = await newInquiry.save();
  res
   .status(201)
   .json({ message: "PG Inquiry created successfully.", data: saved });
 } catch (error) {
  res.status(500).json({ message: "Server error", error });
 }
};

// Get all PG inquiries
exports.getAllPgInquiries = async (req, res) => {
 try {
  const inquiries = await PgInquiry.find().sort({ createdAt: -1 });
  res.status(200).json(inquiries);
 } catch (error) {
  res.status(500).json({ message: "Server error", error });
 }
};

// Get a PG inquiry by ID
exports.getPgInquiryById = async (req, res) => {
 try {
  const inquiry = await PgInquiry.findById(req.params.id);
  if (!inquiry) {
   return res.status(404).json({ message: "Inquiry not found." });
  }
  res.status(200).json(inquiry);
 } catch (error) {
  res.status(500).json({ message: "Server error", error });
 }
};

// Update PG inquiry by ID
exports.updatePgInquiry = async (req, res) => {
 try {
  const updatedInquiry = await PgInquiry.findByIdAndUpdate(
   req.params.id,
   req.body,
   { new: true }
  );
  if (!updatedInquiry) {
   return res.status(404).json({ message: "Inquiry not found." });
  }

  res
   .status(200)
   .json({ message: "PG Inquiry updated.", data: updatedInquiry });
 } catch (error) {
  res.status(500).json({ message: "Server error", error });
 }
};

// Delete PG inquiry by ID
exports.deletePgInquiry = async (req, res) => {
 try {
  const deleted = await PgInquiry.findByIdAndDelete(req.params.id);
  if (!deleted) {
   return res.status(404).json({ message: "Inquiry not found." });
  }
  res.status(200).json({ message: "PG Inquiry deleted." });
 } catch (error) {
  res.status(500).json({ message: "Server error", error });
 }
};
