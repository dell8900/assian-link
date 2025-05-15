const express = require("express");
const router = express.Router();
const {
 createInquiry,
 getAllInquiries,
 getInquiryById,
 updateInquiry,
 deleteInquiry,
} = require("../controllers/mbbsInquiryController");
const {
 createBtechInquiry,
 getAllBtechInquiries,
} = require("../controllers/btechInquiryController");

// POST - Create new inquiry
router.post("/", createInquiry);

// GET - Get all inquiries
router.get("/", getAllInquiries);

// GET - Get a single inquiry by ID
router.get("/:id", getInquiryById);

// PUT - Update inquiry by ID
router.put("/:id", updateInquiry);

// DELETE - Delete inquiry by ID
router.delete("/:id", deleteInquiry);
router.post("/btech-inquiry", createBtechInquiry);
router.get("/btech-inquiry", getAllBtechInquiries);

module.exports = router;
