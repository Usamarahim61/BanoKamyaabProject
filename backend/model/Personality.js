const mongoose = require('mongoose');


const PersonalitySchema = new mongoose.Schema({
  question:
  {
    type: String,
    required: true
  },
});



const Personality = mongoose.model('Personality', PersonalitySchema);

module.exports = Personality;