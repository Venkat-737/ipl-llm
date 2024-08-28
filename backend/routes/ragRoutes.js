const express = require('express');
const router = express.Router();
const { generateAnswer } = require('../services/ragCommentaryService');

router.post('/commentary', async (req, res) => {
  try {
    const { query, matchDetails } = req.body;
    if (!query || !matchDetails) {
      return res.status(400).json({ error: 'Query and match details are required' });
    }
    const commentary = await generateAnswer(query, matchDetails);
    res.json({ commentary });
  } catch (error) {
    console.error('Error generating commentary:', error);
    res.status(500).json({ error: 'Failed to generate commentary' });
  }
});


module.exports = router;
