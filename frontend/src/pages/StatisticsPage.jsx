// import React from 'react';
// import { playerStats, teams, matches } from '../data';

// const StatisticsPage = () => {
//   return (
//     <div className="p-6">
//       <h2 className="text-white text-2xl font-bold mb-6">Statistics</h2>
//       <div className="bg-gray-800 p-4 rounded-lg shadow-lg mb-6">
//         <h3 className="text-white text-xl mb-4">Player Statistics</h3>
//         <table className="table-auto w-full text-white">
//           <thead>
//             <tr>
//               <th className="px-4 py-2">Player</th>
//               <th className="px-4 py-2">Team</th>
//               <th className="px-4 py-2">Runs</th>
//               <th className="px-4 py-2">Average</th>
//               <th className="px-4 py-2">Strike Rate</th>
//             </tr>
//           </thead>
//           <tbody>
//             {playerStats.map(player => (
//               <tr key={player.name}>
//                 <td className="border px-4 py-2">{player.name}</td>
//                 <td className="border px-4 py-2">{player.team}</td>
//                 <td className="border px-4 py-2">{player.runs}</td>
//                 <td className="border px-4 py-2">{player.avg}</td>
//                 <td className="border px-4 py-2">{player.sr}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       <div className="bg-gray-800 p-4 rounded-lg shadow-lg mb-6">
//         <h3 className="text-white text-xl mb-4">Team Statistics</h3>
//         <table className="table-auto w-full text-white">
//           <thead>
//             <tr>
//               <th className="px-4 py-2">Team</th>
//               <th className="px-4 py-2">Color</th>
//             </tr>
//           </thead>
//           <tbody>
//             {Object.keys(teams).map(team => (
//               <tr key={team}>
//                 <td className="border px-4 py-2">{team}</td>
//                 <td className="border px-4 py-2" style={{ backgroundColor: teams[team].color }}></td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       <div className="bg-gray-800 p-4 rounded-lg shadow-lg mb-6">
//         <h3 className="text-white text-xl mb-4">Match Statistics</h3>
//         <table className="table-auto w-full text-white">
//           <thead>
//             <tr>
//               <th className="px-4 py-2">Match</th>
//               <th className="px-4 py-2">Team 1</th>
//               <th className="px-4 py-2">Team 2</th>
//               <th className="px-4 py-2">Score 1</th>
//               <th className="px-4 py-2">Score 2</th>
//               <th className="px-4 py-2">Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {matches.map(match => (
//               <tr key={match.id}>
//                 <td className="border px-4 py-2">{`Match ${match.id}`}</td>
//                 <td className="border px-4 py-2">{match.team1}</td>
//                 <td className="border px-4 py-2">{match.team2}</td>
//                 <td className="border px-4 py-2">{match.score1}</td>
//                 <td className="border px-4 py-2">{match.score2}</td>
//                 <td className="border px-4 py-2">{match.status}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default StatisticsPage;
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BarChart } from "lucide-react";
import { playerStats, matches } from "../data";

const StatisticsPage = () => {
  const [selectedYear, setSelectedYear] = useState("2023");

  const handleYearChange = (value) => {
    setSelectedYear(value);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-indigo-800 p-8">
      <div className="max-w-6xl mx-auto bg-white bg-opacity-10 rounded-xl shadow-2xl overflow-hidden">
        <div className="p-8">
          <h2 className="text-white text-4xl font-bold mb-6 flex items-center">
            <BarChart className="mr-4 text-yellow-400" size={40} />
            IPL Statistics
          </h2>
          <div className="mb-8">
            <Select onValueChange={handleYearChange} defaultValue="2023">
              <SelectTrigger className="w-[180px] bg-white bg-opacity-20 text-white border-none">
                <SelectValue placeholder="Select year" />
              </SelectTrigger>
              <SelectContent className="bg-purple-900 text-white border-none">
                <SelectItem value="allseason">All seasons</SelectItem>
                <SelectItem value="2021">2021</SelectItem>
                <SelectItem value="2022">2022</SelectItem>
                <SelectItem value="2023">2023</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {selectedYear === "2023" ? (
            <>
              <div className="overflow-x-auto mb-8">
                <h3 className="text-white text-2xl font-bold mb-4">
                  Player Statistics
                </h3>
                <table className="w-full text-white">
                  <thead className="bg-purple-800 bg-opacity-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                        Player
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                        Team
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                        Runs
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                        Average
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                        Strike Rate
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-purple-700">
                    {playerStats.map((player, index) => (
                      <tr
                        key={index}
                        className="bg-purple-800 bg-opacity-25 hover:bg-opacity-40 transition-colors duration-200"
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          {player.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {player.team}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {player.runs}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {player.avg}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {player.sr}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="overflow-x-auto">
                <h3 className="text-white text-2xl font-bold mb-4">
                  Match Statistics
                </h3>
                <table className="w-full text-white">
                  <thead className="bg-purple-800 bg-opacity-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                        Match
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                        Team 1
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                        Team 2
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                        Score 1
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                        Score 2
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-purple-700">
                    {matches.map((match, index) => (
                      <tr
                        key={index}
                        className="bg-purple-800 bg-opacity-25 hover:bg-opacity-40 transition-colors duration-200"
                      >
                        <td className="px-6 py-4 whitespace-nowrap">{`Match ${match.id}`}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {match.team1}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {match.team2}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {match.score1}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {match.score2}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {match.status}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          ) : (
            <div className="bg-purple-800 bg-opacity-25 p-8 rounded-lg text-white text-center">
              <p className="text-xl">
                Data for {selectedYear} is not available.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StatisticsPage;
