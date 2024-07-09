import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { playerStats, teams } from '../data';

const PlayerComparisonPage = () => {
  const [player1, setPlayer1] = useState(playerStats[0]);
  const [player2, setPlayer2] = useState(playerStats[1]);

  const comparisonData = [
    { name: 'Matches', player1: player1.matches, player2: player2.matches },
    { name: 'Runs', player1: player1.runs, player2: player2.runs },
    { name: 'Average', player1: player1.avg, player2: player2.avg },
    { name: 'Strike Rate', player1: player1.sr, player2: player2.sr },
    { name: 'Wickets', player1: player1.wickets, player2: player2.wickets },
    { name: 'Economy', player1: player1.economy, player2: player2.economy }
  ];

  return (
    <div className="p-6">
      <h2 className="text-white text-2xl font-bold mb-6">Player Comparison</h2>
      <div className="flex justify-between mb-6">
        <select
          className="bg-gray-800 text-white p-2 rounded"
          onChange={(e) => setPlayer1(playerStats.find(p => p.name === e.target.value))}
          value={player1.name}
        >
          {playerStats.map(player => (
            <option key={player.name} value={player.name}>{player.name}</option>
          ))}
        </select>
        <select
          className="bg-gray-800 text-white p-2 rounded"
          onChange={(e) => setPlayer2(playerStats.find(p => p.name === e.target.value))}
          value={player2.name}
        >
          {playerStats.map(player => (
            <option key={player.name} value={player.name}>{player.name}</option>
          ))}
        </select>
      </div>
      <div className="bg-gray-800 p-4 rounded-lg">
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={comparisonData}>
            <XAxis dataKey="name" stroke="#fff" />
            <YAxis stroke="#fff" />
            <Tooltip />
            <Legend />
            <Bar dataKey="player1" name={player1.name} fill={teams[player1.team].color} />
            <Bar dataKey="player2" name={player2.name} fill={teams[player2.team].color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PlayerComparisonPage;
