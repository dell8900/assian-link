const express = require("express");
const router = express.Router();
const callbackController = require("../controllers/callbackController");

router.post("/", callbackController.createCallback);
router.get("/", callbackController.getAllCallbacks);
router.delete("/:id", callbackController.deleteCallback);

module.exports = router;
