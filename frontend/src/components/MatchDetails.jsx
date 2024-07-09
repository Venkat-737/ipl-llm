import React from 'react';
import { teams } from '../data';

const MatchDetails = ({ match, onBack }) => {
  return (
    <div className="p-6">
      <button onClick={onBack} className="mb-4 bg-gray-700 text-white p-2 rounded">Back to Matches</button>
      <h2 className="text-white text-2xl font-bold mb-6">Match {match.id}</h2>
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg mb-6 flex justify-between items-center">
        <div className="w-16 h-16" style={{ backgroundColor: teams[match.team1].color }} />
        <div className="text-center text-white">
          <div>{match.summary}</div>
          <div>Score: {match.score1} - {match.score2}</div>
          <div>Time: {match.time}</div>
          <div>Venue: {match.venue}</div>
        </div>
        <div className="w-16 h-16" style={{ backgroundColor: teams[match.team2].color }} />
      </div>
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg mb-6">
        <h3 className="text-white text-xl mb-4">Player Performance Reports</h3>
        {/* Add detailed player performance reports here */}
      </div>
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg mb-6">
        <h3 className="text-white text-xl mb-4">Key Moments</h3>
        {/* Add key moments of the match here */}
      </div>
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg mb-6">
        <h3 className="text-white text-xl mb-4">Graphs and Analysis</h3>
        {/* Add graphs and analysis here */}
      </div>
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg mb-6">
        <h3 className="text-white text-xl mb-4">Commentary</h3>
        {/* Add commentary here */}
      </div>
      <button className="fixed bottom-4 right-4 bg-blue-600 hover:bg-blue-700 text-white text-xs rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition duration-300">
        Fan Q
      </button>
    </div>
  );
};

export default MatchDetails;
