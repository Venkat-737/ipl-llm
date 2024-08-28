const express = require('express');
const mongoose = require('mongoose');
const { initializeQAChain } = require('./services/ragCommentaryService');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const commentaryRoutes = require('./routes/ragRoutes');
app.use('/api', commentaryRoutes);

const matchRoutes = require('./routes/matchRoutes');
app.use('/api/matches', matchRoutes);

const PORT = process.env.PORT || 5001;

initializeQAChain()
  .then(() => {
    return mongoose.connect(process.env.MONGO_URI);
  })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.error('Failed to initialize server:', err));
