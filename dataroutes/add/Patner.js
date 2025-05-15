const express = require("express");
const bcrypt = require("bcrypt");
const { PatnerModel } = require("../../models/Patner");
const router = express.Router();
router.post("/patner/register", async (req, res) => {
  const {
    firstname,
    lastname,
    email,
    mobile,
    company_name,
    designation,
    city,
    password,
  } = req.body;
  try {
    if (!email) {
      return res.status(400).json({
        message: "mail id is required",
      });
    }
    let patner = await PatnerModel.find({ email });
    if (patner.length > 0) {
      return res.status(400).json({
        message: "Mail Id already registered",
      });
    }
    bcrypt.hash(password, 5, async (err, secure_password) => {
      if (err) {
        return res.status(400).json({
          error: err,
          message: "Somthing went wrong",
        });
      } else {
        const patner = new PatnerModel({
            firstname,
            lastname,
            email,
            mobile,
            company_name,
            designation,
            city,
            password:secure_password,
        });
        await patner.save();
        res.status(201).json({
          message: "Patner register successfully",
          patner: patner,
        });
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/get-all-patners",async(req,res)=>{
  try {
    const patner=await PatnerModel.find()
    res.status(200).json({
      patner:patner
    })
    
  } catch (error) {
    res.status(500).json({
      message:"Something went wrong"
    })
  }
})
module.exports = router;
