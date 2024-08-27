const mongoose = require('mongoose');

const venueSchema = new mongoose.Schema({
  name: { type: String, required: true },
  city: { type: String, default: '' },
  country: { type: String, default: '' },
  capacity: { type: Number, default: 0 },
  matches: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Match' }], // Array of match IDs
  home_team: { type: mongoose.Schema.Types.ObjectId, ref: 'Team' }, // Reference to the home team
});

const Venue = mongoose.model('Venue', venueSchema);

module.exports = Venue;
