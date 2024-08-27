const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  dob: {
    type: Date,
    default: null
  }
});

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;
