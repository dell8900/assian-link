const express = require("express");
const router = express.Router();
const multer = require("multer");
const { GeneralCollegeModel } = require("../../models/GeneralSchema");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads1/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});
const upload = multer({ storage: storage });
router.get("/getAllUniversity", async (req, res) => {
  try {
    const universities = await GeneralCollegeModel.find();
    res.status(201).json({
      universities,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
      error: error,
    });
  }
});
router.get("/getAllUniversity", async (req, res) => {
  try {
    const universities = await GeneralCollegeModel.find({});
    res.status(201).json({
      universities,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong",
      error: error,
    });
  }
});

router.get("/universities/:course", async (req, res) => {
  try {
    const course = req.params.course;
    const universities = await GeneralCollegeModel.find({ courses: course });

    if (universities.length === 0) {
      return res.status(404).json({ error: "No universities found for this course" });
    }

    res.json({ universities });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.get("/collegeByName/:collegename", async (req, res) => {
  try {
    const collegename = req.params.collegename;
    const universities = await GeneralCollegeModel.find({ collegename: collegename });
    res.json({ universities });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


router.post(
  "/general/add/universities",
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
        course,
      } = req.body;

      const university = new GeneralCollegeModel({
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
        course,
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
