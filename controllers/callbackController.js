const CallbackRequest = require("../models/CallbackRequest");

// Create
exports.createCallback = async (req, res) => {
 try {
  const { fullName, email, mobile, description } = req.body;
  const newRequest = await CallbackRequest.create({
   fullName,
   email,
   mobile,
   description,
  });
  res.status(201).json({ success: true, data: newRequest });
 } catch (error) {
  res
   .status(500)
   .json({ success: false, message: "Failed to create request", error });
 }
};

// Get all
exports.getAllCallbacks = async (req, res) => {
 try {
  const requests = await CallbackRequest.find().sort({ createdAt: -1 });
  res.status(200).json({ success: true, data: requests });
 } catch (error) {
  res
   .status(500)
   .json({ success: false, message: "Failed to fetch requests", error });
 }
};

// Delete
exports.deleteCallback = async (req, res) => {
 try {
  const { id } = req.params;
  await CallbackRequest.findByIdAndDelete(id);
  res.status(200).json({ success: true, message: "Request deleted" });
 } catch (error) {
  res.status(500).json({ success: false, message: "Failed to delete", error });
 }
};
