import React, { useState } from 'react';
import MatchCard from '../components/MatchCard';
import { matches } from '../data';
import MatchDetails from '../components/MatchDetails';

const MatchesPage = () => {
  const [selectedMatch, setSelectedMatch] = useState(null);

  if (selectedMatch) {
    return <MatchDetails match={selectedMatch} onBack={() => setSelectedMatch(null)} />;
  }

  return (
    <div className="p-6">
      <h2 className="text-white text-2xl font-bold mb-6">Matches</h2>
      <div className="mb-8">
        <h3 className="text-white text-xl mb-4">Live & Upcoming Matches</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {matches.filter(m => m.status !== 'completed').map(match => (
            <div key={match.id} onClick={() => setSelectedMatch(match)}>
              <MatchCard match={match} />
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-white text-xl mb-4">Completed Matches</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {matches.filter(m => m.status === 'completed').map(match => (
            <div key={match.id} onClick={() => setSelectedMatch(match)}>
              <MatchCard match={match} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MatchesPage;
