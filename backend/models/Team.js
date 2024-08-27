const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
    name: String,
    city: String,
    seasons: [
        {
            season: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Season'
            },
            players: [{
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Player'
            }],
            coach: String
        }
    ]
});

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;
