const mongoose = require("mongoose");

const websiteData = mongoose.Schema({
     title: {
          type: String,
     },
     description: {
          type: String,
     },
     date: {
          type: String,
     },
     image: {
          type: String,
     },
     
});

const DataModel = mongoose.model("data", websiteData);
module.exports = {
    DataModel,
};