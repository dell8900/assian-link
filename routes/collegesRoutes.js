const express = require("express");
const router = express.Router();
const {
 getAllMedicalColleges,
 getFilteredMedicalColleges,
 getMedicalCollegeById,
} = require("../controllers/combinedCollegeController");

// Combined route
router.get("/medical-colleges", getAllMedicalColleges);
router.get("/filtered-medical-colleges", getFilteredMedicalColleges);
router.get("/medical-college/:id", getMedicalCollegeById);
module.exports = router;
