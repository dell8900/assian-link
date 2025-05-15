const mongoose = require("mongoose");

const careerSchema = mongoose.Schema({
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  qualification: {
    type: String,
  },
  resume: {
    type: String,
  },
  mobile: {
    type: Number,
  },
  email:{
    type:String
  },
  age:{
    type:Number
  }
});

const CareerDataModel=mongoose.model("career",careerSchema)

module.exports={
    CareerDataModel
}