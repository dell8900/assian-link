const mongoose = require("mongoose");

const generalSchema = mongoose.Schema({
  collegename: {
    type: String,
  },

  state: {
    type: String,
  },
  courses: {
    type: String,
  },

  fees: {
    type: String,
  },
  universityDescription: {
    type: String,
  },
  established: {
    type: String,
  },
  collegetype: {
    type: String,
  },

  approval: {
    type: String,
  },
  city: {
    type: String,
  },
  affiliatedby: {
    type: String,
  },
  collegecategory: {
    type: String,
  },
  website: {
    type: String,
  },
  mail: {
    type: String,
  },
  image1: {
    type: String,
  },
  image2: {
    type: String,
  },
  course: {
    type: String,
  },
});
const GeneralCollegeModel = mongoose.model("university", generalSchema);

module.exports = {
    GeneralCollegeModel,
};
