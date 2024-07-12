import React, { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Trophy } from 'lucide-react';

const tableData2021 = [
  { team: "Delhi Capitals", played: 14, won: 10, lost: 4, tied: 0, nr: 0, points: 20, nrr: 0.481 },
  { team: "Chennai Super Kings", played: 14, won: 9, lost: 5, tied: 0, nr: 0, points: 18, nrr: 0.455 },
  { team: "Royal Challengers Bangalore", played: 14, won: 9, lost: 5, tied: 0, nr: 0, points: 18, nrr: -0.140 },
  { team: "Kolkata Knight Riders", played: 14, won: 7, lost: 7, tied: 0, nr: 0, points: 14, nrr: 0.587 },
  { team: "Mumbai Indians", played: 14, won: 7, lost: 7, tied: 0, nr: 0, points: 14, nrr: 0.116 },
  { team: "Punjab Kings", played: 14, won: 6, lost: 8, tied: 0, nr: 0, points: 12, nrr: -0.001 },
  { team: "Rajasthan Royals", played: 14, won: 5, lost: 9, tied: 0, nr: 0, points: 10, nrr: -0.993 },
  { team: "Sunrisers Hyderabad", played: 14, won: 3, lost: 11, tied: 0, nr: 0, points: 6, nrr: -0.545 },
];

const TablePage = () => {
  const [selectedYear, setSelectedYear] = useState('2021');

  const handleYearChange = (value) => {
    setSelectedYear(value);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-indigo-800 p-8">
      <div className="max-w-6xl mx-auto bg-white bg-opacity-10 rounded-xl shadow-2xl overflow-hidden">
        <div className="p-8">
          <h2 className="text-white text-4xl font-bold mb-6 flex items-center">
            <Trophy className="mr-4 text-yellow-400" size={40} />
            IPL Points Table
          </h2>
          <div className="mb-8">
            <Select onValueChange={handleYearChange} defaultValue="2021">
              <SelectTrigger className="w-[180px] bg-white bg-opacity-20 text-white border-none">
                <SelectValue placeholder="Select year" />
              </SelectTrigger>
              <SelectContent className="bg-purple-900 text-white border-none">
                <SelectItem value="2021">2021</SelectItem>
                <SelectItem value="2022">2022</SelectItem>
                <SelectItem value="2023">2023</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {selectedYear === '2021' ? (
            <div className="overflow-x-auto">
              <table className="w-full text-white">
                <thead className="bg-purple-800 bg-opacity-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Team</th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">M</th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">W</th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">L</th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">T</th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">N/R</th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">PT</th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">NRR</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-purple-700">
                  {tableData2021.map((row, index) => (
                    <tr key={index} className="bg-purple-800 bg-opacity-25 hover:bg-opacity-40 transition-colors duration-200">
                      <td className="px-6 py-4 whitespace-nowrap">{row.team}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{row.played}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-green-400">{row.won}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-red-400">{row.lost}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{row.tied}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{row.nr}</td>
                      <td className="px-6 py-4 whitespace-nowrap font-bold text-yellow-300">{row.points}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{row.nrr.toFixed(3)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="bg-purple-800 bg-opacity-25 p-8 rounded-lg text-white text-center">
              <p className="text-xl">Data for {selectedYear} is not available.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TablePage;
// import React, { useState } from 'react';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";


// const tableData2021 = [
//   { team: "Delhi Capitals", played: 14, won: 10, lost: 4, tied: 0, nr: 0, points: 20, nrr: 0.481 },
//   { team: "Chennai Super Kings", played: 14, won: 9, lost: 5, tied: 0, nr: 0, points: 18, nrr: 0.455 },
//   { team: "Royal Challengers Bangalore", played: 14, won: 9, lost: 5, tied: 0, nr: 0, points: 18, nrr: -0.140 },
//   { team: "Kolkata Knight Riders", played: 14, won: 7, lost: 7, tied: 0, nr: 0, points: 14, nrr: 0.587 },
//   { team: "Mumbai Indians", played: 14, won: 7, lost: 7, tied: 0, nr: 0, points: 14, nrr: 0.116 },
//   { team: "Punjab Kings", played: 14, won: 6, lost: 8, tied: 0, nr: 0, points: 12, nrr: -0.001 },
//   { team: "Rajasthan Royals", played: 14, won: 5, lost: 9, tied: 0, nr: 0, points: 10, nrr: -0.993 },
//   { team: "Sunrisers Hyderabad", played: 14, won: 3, lost: 11, tied: 0, nr: 0, points: 6, nrr: -0.545 },
// ];

// const TablePage = () => {
//   const [selectedYear, setSelectedYear] = useState('2021');

//   const handleYearChange = (value) => {
//     setSelectedYear(value);
//   };

//   return (
//     <div className="p-6">
//       <h2 className="text-white text-2xl font-bold mb-6">IPL Points Table</h2>
//       <div className="mb-4 text-white">
//         <Select onValueChange={handleYearChange} defaultValue="2021">
//           <SelectTrigger className="w-[180px] bg-background">
//             <SelectValue placeholder="Select year" />
//           </SelectTrigger>
//           <SelectContent className="text-white bg-background">
//             <SelectItem value="2021">2021</SelectItem>
//             <SelectItem value="2022">2022</SelectItem>
//             <SelectItem value="2023">2023</SelectItem>
//           </SelectContent>
//         </Select>
//       </div>
//       {selectedYear === '2021' ? (
//         <div className="overflow-x-auto">
//           <table className="w-full bg-gray-800 text-white rounded-lg">
//             <thead className="bg-gray-700 ">
//               <tr>
//                 <th className="px-4 py-2 text-left">Team</th>
//                 <th className="px-4 py-2 text-left">Matches</th>
//                 <th className="px-4 py-2 text-left">Won</th>
//                 <th className="px-4 py-2 text-left">Loss</th>
//                 <th className="px-4 py-2 text-left">Tied</th>
//                 <th className="px-4 py-2 text-left">N/R</th>
//                 <th className="px-4 py-2 text-left">Points</th>
//                 <th className="px-4 py-2 text-left">NRR</th>
//               </tr>
//             </thead>
//             <tbody>
//               {tableData2021.map((row, index) => (
//                 <tr key={index} className={index % 2 === 0 ? 'bg-gray-800' : 'bg-gray-900'}>
//                   <td className="px-4 py-2 text-left">{row.team}</td>
//                   <td className="px-4 py-2  ">{row.played}</td>
//                   <td className="px-4 py-2">{row.won}</td>
//                   <td className="px-4 py-2">{row.lost}</td>
//                   <td className="px-4 py-2">{row.tied}</td>
//                   <td className="px-4 py-2">{row.nr}</td>
//                   <td className="px-4 py-2 font-bold">{row.points}</td>
//                   <td className="px-4 py-2">{row.nrr.toFixed(3)}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       ) : (
//         <div className="bg-gray-800 p-4 rounded-lg text-white">
//           <p>Data for {selectedYear} is not available.</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TablePage;
