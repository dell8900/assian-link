const express = require("express");
const router = express.Router();
const EngineeringCollege = require("../models/EngineeringCollege");

// 🔥 Bulk Upload Route
router.post("/engg-colleges/bulk", async (req, res) => {
 try {
  const colleges = req.body;

  if (!Array.isArray(colleges) || colleges.length === 0) {
   return res
    .status(400)
    .json({ success: false, message: "Invalid data format" });
  }

  const inserted = await EngineeringCollege.insertMany(colleges);
  res
   .status(201)
   .json({ success: true, message: `${inserted.length} colleges uploaded.` });
 } catch (error) {
  console.error("Bulk Upload Error:", error);
  res.status(500).json({ success: false, message: "Internal Server Error" });
 }
});

// 📥 Get All Colleges (same format)
router.get("/engg-colleges", async (req, res) => {
 try {
  const colleges = await EngineeringCollege.find({});
  res.status(200).json(colleges);
 } catch (error) {
  console.error("Fetch Error:", error);
  res.status(500).json({ success: false, message: "Error fetching data" });
 }
});
router.get("/engg-colleges/:id", async (req, res) => {
 const { id } = req.params;

 try {
  const college = await EngineeringCollege.findById(id);

  if (!college) {
   return res
    .status(404)
    .json({ success: false, message: "College not found" });
  }

  res.status(200).json(college);
 } catch (error) {
  console.error("Fetch by ID Error:", error);
  res
   .status(500)
   .json({ success: false, message: "Error fetching college by ID" });
 }
});
module.exports = router;
