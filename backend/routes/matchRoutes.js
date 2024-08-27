const express = require('express');
const router = express.Router();
const Match = require('../models/Match');

router.get('/:seasonId', async (req, res) => {
  try {
    // Validate seasonId
    if (!req.params.seasonId) {
      return res.status(400).json({ error: 'Season ID is required' });
    }

    // Fetch matches for the given season
    const matches = await Match.find({ season: req.params.seasonId })
      .populate('team1', 'name color')
      .populate('team2', 'name color')
      .populate('venue', 'name city');

    // If no matches found
    if (!matches.length) {
      return res.status(404).json({ error: 'No matches found for the given season' });
    }

    // Return matches
    res.json(matches);
  } catch (err) {
    console.error('Error fetching matches:', err.message);
    res.status(500).json({ error: 'Failed to fetch matches' });
  }
});

module.exports = router;
