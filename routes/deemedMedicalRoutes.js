const express = require("express");
const router = express.Router();
const DeemedMedicalCollege = require("../models/DeemedMedicalCollege");

// Bulk Upload
router.post("/deemed-medical-colleges/bulk", async (req, res) => {
 try {
  const data = req.body;
  if (!Array.isArray(data) || data.length === 0) {
   return res.status(400).json({ message: "Invalid or empty array" });
  }

  const result = await DeemedMedicalCollege.insertMany(data);
  res
   .status(201)
   .json({ message: `${result.length} colleges uploaded successfully.` });
 } catch (err) {
  console.error("Bulk Upload Error:", err);
  res
   .status(500)
   .json({ message: "Internal Server Error", error: err.message });
 }
});

// Get All
router.get("/deemed-medical-colleges", async (req, res) => {
 try {
  const colleges = await DeemedMedicalCollege.find();
  res.status(200).json(colleges);
 } catch (err) {
  res.status(500).json({ message: "Failed to fetch data", error: err.message });
 }
});
// GET single deemed medical college by ID
router.get("/deemed-medical-college/:id", async (req, res) => {
 try {
  const { id } = req.params;
  const college = await DeemedMedicalCollege.findById(id);

  if (!college) {
   return res
    .status(404)
    .json({ success: false, message: "College not found" });
  }

  res.status(200).json({ success: true, data: college });
 } catch (err) {
  console.error("Error fetching college by ID:", err);
  res
   .status(500)
   .json({ success: false, message: "Server Error", error: err.message });
 }
});

module.exports = router;
