const College = require("../models/College"); // Bangladesh
const RussianMedicalCollege = require("../models/RussianMedicalCollege");
const NepalMedicalCollege = require("../models/NepalMedicalCollege");

exports.getAllMedicalColleges = async (req, res) => {
 try {
  const bangladesh = await College.find({}).lean();
  const russia = await RussianMedicalCollege.find({}).lean();
  const nepal = await NepalMedicalCollege.find({}).lean();

  // Add country field to each
  const formatted = [
   ...bangladesh.map((college) => ({ ...college, country: "Bangladesh" })),
   ...russia.map((college) => ({ ...college, country: "Russia" })),
   ...nepal.map((college) => ({ ...college, country: "Nepal" })),
  ];

  res.status(200).json({ success: true, data: formatted });
 } catch (error) {
  console.error("Error fetching combined college data:", error);
  res.status(500).json({ success: false, message: "Server Error" });
 }
};
exports.getFilteredMedicalColleges = async (req, res) => {
 const { country } = req.query;

 try {
  let result = [];

  if (country === "Bangladesh") {
   const bangladesh = await College.find({}).lean();
   result = bangladesh.map((college) => ({
    ...college,
    country: "Bangladesh",
   }));
  } else if (country === "Russia") {
   const russia = await RussianMedicalCollege.find({}).lean();
   result = russia.map((college) => ({
    ...college,
    country: "Russia",
   }));
  } else if (country === "Nepal") {
   const nepal = await NepalMedicalCollege.find({}).lean();
   result = nepal.map((college) => ({
    ...college,
    country: "Nepal",
   }));
  } else {
   return res.status(400).json({
    success: false,
    message: "Please provide a valid country: Nepal, Russia, or Bangladesh",
   });
  }

  res.status(200).json({ success: true, data: result });
 } catch (error) {
  console.error("Error filtering colleges:", error);
  res.status(500).json({ success: false, message: "Server Error" });
 }
};
exports.getMedicalCollegeById = async (req, res) => {
 const { id } = req.params;
 const { country } = req.query;

 try {
  let college = null;

  if (country === "Bangladesh") {
   college = await College.findById(id).lean();
  } else if (country === "Russia") {
   college = await RussianMedicalCollege.findById(id).lean();
  } else if (country === "Nepal") {
   college = await NepalMedicalCollege.findById(id).lean();
  } else {
   return res.status(400).json({
    success: false,
    message: "Please provide a valid country: Nepal, Russia, or Bangladesh",
   });
  }

  if (!college) {
   return res.status(404).json({
    success: false,
    message: "College not found",
   });
  }

  res.status(200).json({ success: true, data: { ...college, country } });
 } catch (error) {
  console.error("Error fetching college by ID:", error);
  res.status(500).json({ success: false, message: "Server Error" });
 }
};
