import React from 'react';
import { playerStats, teams, matches } from '../data';

const StatisticsPage = () => {
  return (
    <div className="p-6">
      <h2 className="text-white text-2xl font-bold mb-6">Statistics</h2>
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg mb-6">
        <h3 className="text-white text-xl mb-4">Player Statistics</h3>
        <table className="table-auto w-full text-white">
          <thead>
            <tr>
              <th className="px-4 py-2">Player</th>
              <th className="px-4 py-2">Team</th>
              <th className="px-4 py-2">Runs</th>
              <th className="px-4 py-2">Average</th>
              <th className="px-4 py-2">Strike Rate</th>
            </tr>
          </thead>
          <tbody>
            {playerStats.map(player => (
              <tr key={player.name}>
                <td className="border px-4 py-2">{player.name}</td>
                <td className="border px-4 py-2">{player.team}</td>
                <td className="border px-4 py-2">{player.runs}</td>
                <td className="border px-4 py-2">{player.avg}</td>
                <td className="border px-4 py-2">{player.sr}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg mb-6">
        <h3 className="text-white text-xl mb-4">Team Statistics</h3>
        <table className="table-auto w-full text-white">
          <thead>
            <tr>
              <th className="px-4 py-2">Team</th>
              <th className="px-4 py-2">Color</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(teams).map(team => (
              <tr key={team}>
                <td className="border px-4 py-2">{team}</td>
                <td className="border px-4 py-2" style={{ backgroundColor: teams[team].color }}></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="bg-gray-800 p-4 rounded-lg shadow-lg mb-6">
        <h3 className="text-white text-xl mb-4">Match Statistics</h3>
        <table className="table-auto w-full text-white">
          <thead>
            <tr>
              <th className="px-4 py-2">Match</th>
              <th className="px-4 py-2">Team 1</th>
              <th className="px-4 py-2">Team 2</th>
              <th className="px-4 py-2">Score 1</th>
              <th className="px-4 py-2">Score 2</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {matches.map(match => (
              <tr key={match.id}>
                <td className="border px-4 py-2">{`Match ${match.id}`}</td>
                <td className="border px-4 py-2">{match.team1}</td>
                <td className="border px-4 py-2">{match.team2}</td>
                <td className="border px-4 py-2">{match.score1}</td>
                <td className="border px-4 py-2">{match.score2}</td>
                <td className="border px-4 py-2">{match.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StatisticsPage;
