const express = require("express");
const { CareerDataModel } = require("../../models/Career");
const router = express.Router();


router.post("/career/add",async(req,res)=>{
  const { firstname, lastname, qualification, resume, mobile, email, age } =
  req.body;
try {
  const careerData = await new CareerDataModel({
    firstname,
    lastname,
    qualification,
    resume,
    mobile,
    email,
    age,
  });
  await careerData.save()
  res.status(201).json({
      message:"Career data upload successfully",
      careerData
  })
} catch (error) {
  res.status(500).json({
      error: "Internal Server Error"
  })
}
})

module.exports = router;
