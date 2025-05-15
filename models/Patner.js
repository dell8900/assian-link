const mongoose=require("mongoose")

const patnerSchema=mongoose.Schema({
    firstname:{
        type:String
    },
    lastname:{
        type:String
    },
    email:{
        type:String
    },
    mobile:{
        type:String
    },
    company_name:{
        type:String
    },
    designation:{
        type:String
    },
    // country:{
    //     type:String
    // },
    city:{
        type:String
    },
    password:{
        type:String
    },
   
})

const PatnerModel=mongoose.model("patner",patnerSchema)

module.exports={
    PatnerModel
}