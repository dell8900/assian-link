const express = require("express");
const router = express.Router();
const {
 getAllBtechInquiries,
} = require("../controllers/btechInquiryController");

router.get("/", getAllBtechInquiries);

module.exports = router;
