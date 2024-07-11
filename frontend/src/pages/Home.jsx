// src/pages/Home.jsx
import React from 'react';

const Home = () => (
  <div className="p-6">
    <h1 className="text-white text-3xl font-bold mb-6">Welcome to Fast Bowled - IPL AI Companion</h1>
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg mb-6">
      <h2 className="text-white text-2xl mb-4">About Fast Bowled</h2>
      <p className="text-gray-300">
        Fast Bowled is your ultimate IPL AI companion, providing comprehensive match information, statistical analysis, AI-based commentary, and much more.
        Stay updated with live and upcoming matches, compare player stats, and keep track of the latest points table.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
        <h2 className="text-white text-xl mb-2">Live Matches</h2>
        <p className="text-gray-300">
          Get real-time updates and commentary on live matches.
        </p>
      </div>
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
        <h2 className="text-white text-xl mb-2">Player Comparison</h2>
        <p className="text-gray-300">
          Compare stats between your favorite players.
        </p>
      </div>
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
        <h2 className="text-white text-xl mb-2">Points Table</h2>
        <p className="text-gray-300">
          Keep track of the current standings in the league.
        </p>
      </div>
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
        <h2 className="text-white text-xl mb-2">Fan Query Chatbot</h2>
        <p className="text-gray-300">
          Ask questions on IPL and get accurate answers. Created using RAG.
        </p>
      </div>
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
        <h2 className="text-white text-xl mb-2">Statistics</h2>
        <p className="text-gray-300">
          All Stats about your favorite players and team at one place.
        </p>
      </div>
    </div>
  </div>
);

export default Home;
