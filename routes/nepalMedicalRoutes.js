const express = require("express");
const router = express.Router();
const NepalMedicalCollege = require("../models/NepalMedicalCollege");

// Bulk upload
router.post("/nepal-medical-colleges/bulk", async (req, res) => {
 try {
  const colleges = req.body;
  if (!Array.isArray(colleges) || colleges.length === 0) {
   return res.status(400).json({ message: "Invalid or empty array" });
  }
  const inserted = await NepalMedicalCollege.insertMany(colleges);
  res.status(201).json({ message: `${inserted.length} colleges uploaded.` });
 } catch (err) {
  console.error("Bulk Upload Error:", err);
  res
   .status(500)
   .json({ message: "Internal Server Error", error: err.message });
 }
});

// Get all colleges
router.get("/nepal-medical-colleges", async (req, res) => {
 try {
  const data = await NepalMedicalCollege.find();
  res.status(200).json(data);
 } catch (err) {
  res.status(500).json({ message: "Failed to fetch data", error: err.message });
 }
});

module.exports = router;
