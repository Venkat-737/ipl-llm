import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Trophy } from 'lucide-react';

const TablePage = () => {
  const [selectedYear, setSelectedYear] = useState('2022');
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const showTiesColumn = selectedYear !== '2020';
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:5000/api/points-table/${selectedYear}`);
        const filteredData = response.data.filter(item => 
          item.team && 
          item.matches && 
          !isNaN(parseInt(item.matches)) && 
          !item.team.startsWith('W') && 
          !item.team.startsWith('L')
        );
        setTableData(filteredData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to fetch data. Please try again later.');
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedYear]);

  const handleYearChange = (value) => {
    setSelectedYear(value);
  };

  if (loading) return <div className="text-white text-center">Loading...</div>;
  if (error) return <div className="text-red-500 text-center">{error}</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-indigo-800 p-8">
      <div className="max-w-6xl mx-auto bg-white bg-opacity-10 rounded-xl shadow-2xl overflow-hidden">
        <div className="p-8">
          <h2 className="text-white text-4xl font-bold mb-6 flex items-center">
            <Trophy className="mr-4 text-yellow-400" size={40} />
            IPL Points Table
          </h2>
          <div className="mb-8">
  <Select onValueChange={handleYearChange} value={selectedYear}>
    <SelectTrigger className="w-[180px] bg-white bg-opacity-20 text-white border-none">
      <SelectValue placeholder="Select year" />
    </SelectTrigger>
    <SelectContent className="bg-purple-900 text-white border-none">
    <SelectItem value="2018">2018</SelectItem>
      <SelectItem value="2019">2019</SelectItem>
      <SelectItem value="2020">2020</SelectItem>
      <SelectItem value="2021">2021</SelectItem>
      <SelectItem value="2022">2022</SelectItem>
    </SelectContent>
  </Select>
</div>
{tableData.length > 0 ? (
  <div className="overflow-x-auto">
    <table className="w-full text-white">
    <thead className="bg-purple-800 bg-opacity-50">
    <tr>
        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Team</th>
        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">M</th>
        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">W</th>
        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">L</th>
        {showTiesColumn && <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">T</th>}
        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">N/R</th>
        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">PT</th>
        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">NRR</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-purple-700">
      {tableData.map((row, index) => (
        <tr key={index} className="bg-purple-800 bg-opacity-25 hover:bg-opacity-40 transition-colors duration-200">
          <td className="px-6 py-4 whitespace-nowrap">{row.team.replace(/^\d+/, '')}</td>
          <td className="px-6 py-4 whitespace-nowrap">{row.matches}</td>
          <td className="px-6 py-4 whitespace-nowrap text-green-400">{row.wins}</td>
          <td className="px-6 py-4 whitespace-nowrap text-red-400">{row.losses}</td>
          {showTiesColumn && <td className="px-6 py-4 whitespace-nowrap">{row.ties}</td>}
          <td className="px-6 py-4 whitespace-nowrap">{row.noResult}</td>
          <td className="px-6 py-4 whitespace-nowrap font-bold text-yellow-300">{row.points}</td>
          <td className="px-6 py-4 whitespace-nowrap">{row.nrr}</td>
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
