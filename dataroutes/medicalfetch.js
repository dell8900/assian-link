const express = require("express");
const app = express.Router();
const University = require("../models/University");

app.get("/medical/MBBS", async (req, res) => {
 try {
  console.log("Fetching all universities (excluding image2)");
  const universities = await University.find({}, { image1: 0 }); // 👈 Exclude image2
  console.log("Fetched universities:", universities);
  res.status(200).json(universities);
 } catch (error) {
  console.error("Error fetching universities:", error);
  res.status(500).json({ message: "Internal server error" });
 }
});

module.exports = app;
