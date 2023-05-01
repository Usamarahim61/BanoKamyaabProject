const mongoose = require('mongoose');


const EmotionalSchema = new mongoose.Schema({
  question:
  {
    type: String,
    required: true
  },
});



const Emotional = mongoose.model('Emotional_Intelligence', EmotionalSchema);

module.exports = Emotional;