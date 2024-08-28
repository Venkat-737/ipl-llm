import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CommentarySection = ({ matchId, team1, team2, venue, date }) => {
  const [query, setQuery] = useState('');
  const [commentary, setCommentary] = useState('');

  useEffect(() => {
    sendInitialPrompt();
  }, []);

  const sendInitialPrompt = async () => {
    try {
      const response = await axios.post('http://localhost:5001/api/commentary', {
        query: 'Provide a brief overview of this match',
        matchDetails: { id: matchId, team1, team2, venue, date }
      });
      setCommentary(response.data.commentary);
    } catch (error) {
      console.error('Failed to fetch initial commentary:', error);
    }
  };

  const fetchCommentary = async () => {
    try {
      const response = await axios.post('http://localhost:5001/api/commentary', {
        query,
        matchDetails: { id: matchId, team1, team2, venue, date }
      });
      setCommentary(response.data.commentary || 'No commentary available');
    } catch (error) {
      console.error('Failed to fetch commentary:', error);
      setCommentary('Failed to fetch commentary. Please try again.');
    }
  };

  return (
    <div className="mt-6 bg-gray-800 p-4 rounded-lg">
      <h3 className="text-xl font-semibold mb-2 text-yellow-300">AI Commentary</h3>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Ask about the match..."
        className="w-full p-2 mb-2 rounded text-black"
      />
      <button onClick={fetchCommentary} className="bg-blue-500 text-white p-2 rounded">
        Get Commentary
      </button>
      {commentary && (
        <p className="text-white mt-4">{commentary}</p>
      )}
    </div>
  );
};

export default CommentarySection;
