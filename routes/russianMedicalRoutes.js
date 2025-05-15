const express = require("express");
const router = express.Router();
const RussianMedicalCollege = require("../models/RussianMedicalCollege");

// Bulk upload
router.post("/russian-medical-colleges/bulk", async (req, res) => {
 try {
  const colleges = req.body;
  if (!Array.isArray(colleges) || colleges.length === 0) {
   return res.status(400).json({ message: "Invalid or empty array" });
  }
  const result = await RussianMedicalCollege.insertMany(colleges);
  res.status(201).json({ message: `${result.length} colleges uploaded.` });
 } catch (error) {
  console.error("Bulk Upload Error:", error);
  res
   .status(500)
   .json({ message: "Internal Server Error", error: error.message });
 }
});

// Get all
router.get("/russian-medical-colleges", async (req, res) => {
 try {
  const data = await RussianMedicalCollege.find();
  res.status(200).json(data);
 } catch (error) {
  res
   .status(500)
   .json({ message: "Failed to fetch data", error: error.message });
 }
});

module.exports = router;
