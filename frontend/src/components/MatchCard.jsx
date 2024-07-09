// src/components/MatchCard.jsx
import React from 'react';
import { teams } from '../data';

const MatchCard = ({ match }) => (
  <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
    <div className="p-4">
      <h3 className={`text-lg font-semibold ${match.status === 'live' ? 'text-red-400' : 'text-gray-300'}`}>
        {match.status === 'live' ? 'Live' : match.status === 'upcoming' ? 'Upcoming' : ''} Match {match.id}
      </h3>
      <div className="mt-2 flex justify-between items-center">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 rounded-full flex items-center justify-center text-white" style={{ backgroundColor: teams[match.team1].color }}>
            {match.team1}
          </div>
          <span className="mt-1 text-sm text-gray-400">{match.score1 || ''}</span>
        </div>
        <span className="text-gray-400">vs</span>
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 rounded-full flex items-center justify-center text-white" style={{ backgroundColor: teams[match.team2].color }}>
            {match.team2}
          </div>
          <span className="mt-1 text-sm text-gray-400">{match.score2 || ''}</span>
        </div>
      </div>
      <div className="mt-4 text-gray-400">
        <p>Time: {match.time}</p>
        <p>Venue: {match.venue}</p>
      </div>
    </div>
  </div>
);

export default MatchCard;
