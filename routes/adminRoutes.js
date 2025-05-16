const express = require("express");
const router = express.Router();
const { getAllAdmins, verifyAdmin } = require("../controllers/adminController");

// GET all admins
router.get("/admins", getAllAdmins);
// PATCH /api/auth/verify/:id
router.patch("/verify/:id", verifyAdmin);

module.exports = router;
