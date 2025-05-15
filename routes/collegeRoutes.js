const express = require("express");
const router = express.Router();
const convertAndInsert = require("../utils/convertAndInsert");
const College = require("../models/College");

// POST College using Helper
router.post("/college", async (req, res) => {
 try {
  const response = await convertAndInsert(req.body);
  if (response.success) {
   res
    .status(201)
    .json({ message: "College added successfully", college: response.college });
  } else {
   res.status(500).json({ message: response.error });
  }
 } catch (error) {
  console.error("API error:", error);
  res.status(500).json({ message: "Internal Server Error" });
 }
});
router.post("/college/bulk", async (req, res) => {
 try {
  const collegesArray = req.body;

  if (!Array.isArray(collegesArray) || collegesArray.length === 0) {
   return res
    .status(400)
    .json({ message: "Invalid input. Must be a non-empty array." });
  }

  const insertedColleges = await College.insertMany(collegesArray);

  res.status(201).json({
   message: `${insertedColleges.length} colleges added successfully`,
   colleges: insertedColleges,
  });
 } catch (error) {
  console.error("Bulk Upload API error:", error);
  res.status(500).json({ message: "Internal Server Error" });
 }
});
module.exports = router;
