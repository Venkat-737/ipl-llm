const mongoose = require('mongoose');

const seasonSchema = new mongoose.Schema({
  year: String,
  name: String,
});

module.exports = mongoose.model('Season', seasonSchema);
