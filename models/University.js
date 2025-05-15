const mongoose=require('mongoose')
const universitySchema = new mongoose.Schema({

    collegename: String,
   
    state: String,
    courses:String,
    
    fees:String, 
    universityDescription:String,
    established:String,
    collegetype:String,
    
    approval:String,
    city:String,
    affiliatedby:String,
    collegecategory:String,
    website:String,
    mail:String,
    image1:String,
    image2:String,
    coursesarray:Array



  
    
    
  }, { collection: 'universities' });
  
  module.exports = mongoose.model('University', universitySchema);
  