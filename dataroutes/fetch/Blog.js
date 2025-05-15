
const express=require("express");
const { DataModel } = require("../../models/blog");

const router=express.Router()

router.get("/data",async(req,res)=>{
    try {
        const data = await DataModel.find();
        res.status(200).send({data,msg:"successfull"})
   } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
   }
})
router.get("/blogdetail/:id",async(req,res)=>{
     try {
          const websiteData = await DataModel.findById(req.params.id);
          if (!websiteData) {
              return res.status(404).json({ error: "No data found" });
          }
          res.json(websiteData);
      } catch (error) {
          res.status(500).json({ error: error.message });
      }
})



module.exports=router