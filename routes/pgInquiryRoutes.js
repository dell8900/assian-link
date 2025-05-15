const express = require("express");
const router = express.Router();
const pgInquiryController = require("../controllers/pgInquiryController");

router.post("/", pgInquiryController.createPgInquiry);
router.get("/", pgInquiryController.getAllPgInquiries);
router.get("/:id", pgInquiryController.getPgInquiryById);
router.put("/:id", pgInquiryController.updatePgInquiry);
router.delete("/:id", pgInquiryController.deletePgInquiry);

module.exports = router;
