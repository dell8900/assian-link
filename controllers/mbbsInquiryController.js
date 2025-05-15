const MbbsInquiry = require("../models/MbbsInquiry");

// Create a new inquiry
exports.createInquiry = async (req, res) => {
 const { name, contactDetail, city, state, budget } = req.body;

 if (!name || !contactDetail || !city || !state || !budget) {
  return res.status(400).json({ message: "All fields are required." });
 }

 try {
  const newInquiry = new MbbsInquiry({
   name,
   contactDetail,
   city,
   state,
   budget,
  });

  const saved = await newInquiry.save();
  res
   .status(201)
   .json({ message: "Inquiry created successfully.", data: saved });
 } catch (error) {
  res.status(500).json({ message: "Server error", error });
 }
};

// Get all inquiries
exports.getAllInquiries = async (req, res) => {
 try {
  const inquiries = await MbbsInquiry.find().sort({ createdAt: -1 });
  res.status(200).json(inquiries);
 } catch (error) {
  res.status(500).json({ message: "Server error", error });
 }
};

// Get a single inquiry by ID
exports.getInquiryById = async (req, res) => {
 try {
  const inquiry = await MbbsInquiry.findById(req.params.id);
  if (!inquiry) {
   return res.status(404).json({ message: "Inquiry not found." });
  }
  res.status(200).json(inquiry);
 } catch (error) {
  res.status(500).json({ message: "Server error", error });
 }
};

// Update inquiry by ID
exports.updateInquiry = async (req, res) => {
 try {
  const updatedInquiry = await MbbsInquiry.findByIdAndUpdate(
   req.params.id,
   req.body,
   { new: true }
  );

  if (!updatedInquiry) {
   return res.status(404).json({ message: "Inquiry not found." });
  }

  res
   .status(200)
   .json({ message: "Inquiry updated successfully.", data: updatedInquiry });
 } catch (error) {
  res.status(500).json({ message: "Server error", error });
 }
};

// Delete inquiry by ID
exports.deleteInquiry = async (req, res) => {
 try {
  const deleted = await MbbsInquiry.findByIdAndDelete(req.params.id);
  if (!deleted) {
   return res.status(404).json({ message: "Inquiry not found." });
  }
  res.status(200).json({ message: "Inquiry deleted successfully." });
 } catch (error) {
  res.status(500).json({ message: "Server error", error });
 }
};
