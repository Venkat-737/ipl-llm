const mongoose = require('mongoose');
const Team = require('./Team'); // This is already present
const Venue = require('./Venue'); // Import the Venue model here

const matchSchema = new mongoose.Schema({
    season: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Season'
    },
    date: Date,
    match_type: String,
    team1: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team'
    },
    team2: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team'
    },
    venue: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Venue'
    },
    result: {
        winner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Team'
        },
        margin: String,
        man_of_the_match: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Player'
        }
    },
    first_innings: Array,
    second_innings: Array
});

const Match = mongoose.model('Match', matchSchema);

module.exports = Match;
