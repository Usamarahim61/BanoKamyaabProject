const mongoose = require('mongoose');


const CreativitySchema = new mongoose.Schema({
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


const Creativity = mongoose.model('Creativity', CreativitySchema);

module.exports = Creativity;