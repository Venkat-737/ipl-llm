import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ChevronLeft, Trophy } from 'lucide-react';
import MatchCard from './MatchCard'; // Ensure the path is correct
import MatchDetails from './MatchDetails';

const MatchesPage = () => {

  const [matches, setMatches] = useState([]);
  const [selectedMatch, setSelectedMatch] = useState(null);
  const [seasonId, setSeasonId] = useState('668fde6b0a25100ac38e1a45');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        setError('');
        if (!seasonId) return;

        const response = await axios.get(`http://localhost:5001/api/matches/${seasonId}`);
        console.log('Fetched Matches:', response.data);
        setMatches(response.data);
      } catch (error) {
        console.error('Error fetching matches:', error);
        setError('Failed to fetch matches. Please try again later.');
      }
    };

    fetchMatches();
  }, [seasonId]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-indigo-800 p-8">
      <div className="max-w-6xl mx-auto bg-white bg-opacity-10 rounded-xl shadow-2xl overflow-hidden">
        <div className="p-8">
          <h1 className="text-white text-4xl font-bold mb-8 flex items-center">
            <Trophy className="mr-4 text-yellow-400" size={40} />
            IPL Matches
          </h1>

          {selectedMatch ? (
            <div>
              <button
                onClick={() => setSelectedMatch(null)}
                className="mb-4 flex items-center text-yellow-400 hover:text-yellow-300 transition-colors duration-300"
              >
                <ChevronLeft size={24} />
                <span className="ml-2 text-lg font-semibold">Back to Matches</span>
              </button>
              <MatchDetails match={selectedMatch} />
            </div>
          ) : (
            <>
              <div className="mb-8">
                <label className="text-white mr-4 text-lg ">Select Season: </label>
                <select
                  className="p-2 rounded cursor-pointer bg-purple-900 text-white border-none"
                  value={seasonId}
                  onChange={(e) => setSeasonId(e.target.value)}
                >
                  <option value="">  Select a season  </option>
                  <option value="668fde490a25100ac38e1a35">2008</option>
                  <option value="668fde4c0a25100ac38e1a36">2009</option>
                  <option value="668fde4e0a25100ac38e1a37">2010</option>
                  <option value="668fde500a25100ac38e1a38">2011</option>
                  <option value="668fde520a25100ac38e1a39">2012</option>
                  <option value="668fde550a25100ac38e1a3a">2013</option>
                  <option value="668fde570a25100ac38e1a3b">2014</option>
                  <option value="668fde590a25100ac38e1a3c">2015</option>
                  <option value="668fde5b0a25100ac38e1a3d">2016</option>
                  <option value="668fde5d0a25100ac38e1a3e">2017</option>
                  <option value="668fde5f0a25100ac38e1a3f">2018</option>
                  <option value="668fde610a25100ac38e1a40">2019</option>
                  <option value="668fde630a25100ac38e1a41">2020</option> 
                  <option value="668fde650a25100ac38e1a42">2021</option>
                  <option value="668fde670a25100ac38e1a43">2022</option>
                  <option value="668fde690a25100ac38e1a44">2023</option>
                  <option value="668fde6b0a25100ac38e1a45">2024</option>
                </select>
              </div>

              {error && <p className="text-red-500">{error}</p>}

              <section className="mb-12">
                <h2 className="text-white text-2xl font-semibold mb-6">All Matches</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {matches.map(match => (
                    <div key={match._id} onClick={() => setSelectedMatch(match)} className="cursor-pointer ">
                      <MatchCard match={match} />
                    </div>
                  ))}
                </div>
              </section>
            </>
          )}
        </div>
      </div>
    </div>
  );
};


export default MatchesPage;
