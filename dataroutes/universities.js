const express = require("express");
const router = express.Router();
const University = require("../models/University");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads1/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post(
  "/medical/uploadData",
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
  ]),
  async (req, res) => {
    console.log("received a request");
    try {
      const {
        collegename,
        state,
        courses,
        fees,
        universityDescription,
        established,
        collegetype,
        approval,
        city,
        affiliatedby,
        collegecategory,
        website,
        mail,
        image1,
        image2,
        coursesarray,
      } = req.body;

      console.log(coursesarray);

      const university = new University({
        collegename,
        state,
        courses,
        fees,
        universityDescription,
        established,
        collegetype,
        approval,
        city,
        affiliatedby,
        collegecategory,
        website,
        mail,
        image1,
        image2,
        coursesarray,
      });

      await university.save();

      res.status(200).json({ message: "Data added successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
);

module.exports = router;
