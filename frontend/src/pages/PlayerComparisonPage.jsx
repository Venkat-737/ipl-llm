// import React, { useState } from 'react';
// import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// import { playerStats, teams } from '../data';

// const PlayerComparisonPage = () => {
//   const [player1, setPlayer1] = useState(playerStats[0]);
//   const [player2, setPlayer2] = useState(playerStats[1]);

//   const comparisonData = [
//     { name: 'Matches', player1: player1.matches, player2: player2.matches },
//     { name: 'Runs', player1: player1.runs, player2: player2.runs },
//     { name: 'Average', player1: player1.avg, player2: player2.avg },
//     { name: 'Strike Rate', player1: player1.sr, player2: player2.sr },
//     { name: 'Wickets', player1: player1.wickets, player2: player2.wickets },
//     { name: 'Economy', player1: player1.economy, player2: player2.economy }
//   ];

//   return (
//     <div className="p-6">
//       <h2 className="text-white text-2xl font-bold mb-6">Player Comparison</h2>
//       <div className="flex justify-between mb-6">
//         <select
//           className="bg-gray-800 text-white p-2 rounded"
//           onChange={(e) => setPlayer1(playerStats.find(p => p.name === e.target.value))}
//           value={player1.name}
//         >
//           {playerStats.map(player => (
//             <option key={player.name} value={player.name}>{player.name}</option>
//           ))}
//         </select>
//         <select
//           className="bg-gray-800 text-white p-2 rounded"
//           onChange={(e) => setPlayer2(playerStats.find(p => p.name === e.target.value))}
//           value={player2.name}
//         >
//           {playerStats.map(player => (
//             <option key={player.name} value={player.name}>{player.name}</option>
//           ))}
//         </select>
//       </div>
//       <div className="bg-gray-800 p-4 rounded-lg">
//         <ResponsiveContainer width="100%" height={400}>
//           <BarChart data={comparisonData}>
//             <XAxis dataKey="name" stroke="#fff" />
//             <YAxis stroke="#fff" />
//             <Tooltip />
//             <Legend />
//             <Bar dataKey="player1" name={player1.name} fill={teams[player1.team].color} />
//             <Bar dataKey="player2" name={player2.name} fill={teams[player2.team].color} />
//           </BarChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// };

// export default PlayerComparisonPage;
import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { playerStats, teams } from '../data';

const StatChart = ({ title, data, dataKey, players }) => (
  <div className="bg-gray-800 p-4 rounded-lg mb-6">
    <h3 className="text-lg font-semibold mb-4 text-white">{title}</h3>
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="name" stroke="#fff" />
        <YAxis stroke="#fff" />
        <Tooltip />
        <Legend />
        {players.map((player) => (
          <Bar key={player.name} dataKey={`${player.name}_${dataKey}`} name={player.name} fill={teams[player.team].color} />
        ))}
      </BarChart>
    </ResponsiveContainer>
  </div>
);

const PlayerComparisonPage = () => {
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [showPlayerList, setShowPlayerList] = useState(false);

  const addPlayer = (player) => {
    if (selectedPlayers.length < 4 && !selectedPlayers.includes(player)) {
      setSelectedPlayers([...selectedPlayers, player]);
    }
    setShowPlayerList(false);
  };

  const removePlayer = (playerToRemove) => {
    setSelectedPlayers(selectedPlayers.filter(player => player !== playerToRemove));
  };

  const createChartData = (dataKey) => {
    return [
      {
        name: dataKey.charAt(0).toUpperCase() + dataKey.slice(1),
        ...selectedPlayers.reduce((acc, player) => ({ ...acc, [`${player.name}_${dataKey}`]: player[dataKey] }), {})
      }
    ];
  };

  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      <h2 className="text-2xl font-bold mb-6">Player Comparison</h2>
      <div className="flex flex-wrap gap-4 mb-6">
        {selectedPlayers.map((player) => (
          <div key={player.name} className="flex items-center bg-gray-800 p-2 rounded-lg">
            <span className="mr-2">{player.name}</span>
            <button
              onClick={() => removePlayer(player)}
              className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700 transition-colors"
            >
              Remove
            </button>
          </div>
        ))}
        {selectedPlayers.length < 4 && (
          <button
            onClick={() => setShowPlayerList(!showPlayerList)}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
          >
            Add Player
          </button>
        )}
      </div>
      {showPlayerList && (
        <div className="bg-gray-800 p-4 rounded-lg mb-6 max-h-64 overflow-y-auto">
          {playerStats.map((player) => (
            <button
              key={player.name}
              onClick={() => addPlayer(player)}
              disabled={selectedPlayers.includes(player)}
              className={`w-full text-left p-2 mb-2 rounded ${
                selectedPlayers.includes(player) ? 'bg-gray-700 cursor-not-allowed' : 'bg-gray-800 hover:bg-gray-700'
              }`}
            >
              {player.name} - {teams[player.team].name}
            </button>
          ))}
        </div>
      )}
      {selectedPlayers.length > 0 ? (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <StatChart title="Runs" data={createChartData('runs')} dataKey="runs" players={selectedPlayers} />
            <StatChart title="Wickets" data={createChartData('wickets')} dataKey="wickets" players={selectedPlayers} />
            <StatChart title="Average" data={createChartData('avg')} dataKey="avg" players={selectedPlayers} />
            <StatChart title="Strike Rate" data={createChartData('sr')} dataKey="sr" players={selectedPlayers} />
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Detailed Statistics</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="p-2 text-left">Player</th>
                    <th className="p-2 text-right">Matches</th>
                    <th className="p-2 text-right">Runs</th>
                    <th className="p-2 text-right">Average</th>
                    <th className="p-2 text-right">Strike Rate</th>
                    <th className="p-2 text-right">Wickets</th>
                    <th className="p-2 text-right">Economy</th>
                    <th className="p-2 text-right">Centuries</th>
                    <th className="p-2 text-right">Fifties</th>
                    <th className="p-2 text-right">Best Bowling</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedPlayers.map((player) => (
                    <tr key={player.name} className="border-b border-gray-700">
                      <td className="p-2">{player.name}</td>
                      <td className="p-2 text-right">{player.matches}</td>
                      <td className="p-2 text-right">{player.runs}</td>
                      <td className="p-2 text-right">{player.avg.toFixed(2)}</td>
                      <td className="p-2 text-right">{player.sr.toFixed(2)}</td>
                      <td className="p-2 text-right">{player.wickets}</td>
                      <td className="p-2 text-right">{player.economy.toFixed(2)}</td>
                      <td className="p-2 text-right">{player.centuries || 0}</td>
                      <td className="p-2 text-right">{player.fifties || 0}</td>
                      <td className="p-2 text-right">{player.bestBowling || 'N/A'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center text-gray-400">
          Select players to compare their statistics.
        </div>
      )}
    </div>
  );
};

export default PlayerComparisonPage;