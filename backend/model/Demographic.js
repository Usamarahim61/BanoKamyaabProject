const mongoose = require('mongoose');


const DemographicSchema = new mongoose.Schema({
  question:
  {
    type: String,
    required: true
  },
  options: [{

    option1: {
      type: String,
      required: true,
    },

    option2: {
      type: String,
      required: true,
    },
    option3: {
      type: String,
      // required: true,
    },
    option4: {
      type: String,
      // required: true,
    }

  }]
});



const Demographic = mongoose.model('Demographic', DemographicSchema);

module.exports = Demographic;