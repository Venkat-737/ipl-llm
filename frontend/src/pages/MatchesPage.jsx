// import React, { useState } from 'react';
// import MatchCard from '../components/MatchCard';
// import { matches } from '../data';
// import MatchDetails from '../components/MatchDetails';

// const MatchesPage = () => {
//   const [selectedMatch, setSelectedMatch] = useState(null);

//   if (selectedMatch) {
//     return <MatchDetails match={selectedMatch} onBack={() => setSelectedMatch(null)} />;
//   }

//   return (
//     <div className="p-6">
//       <h2 className="text-white text-2xl font-bold mb-6">Matches</h2>
//       <div className="mb-8">
//         <h3 className="text-white text-xl mb-4">Live & Upcoming Matches</h3>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {matches.filter(m => m.status !== 'completed').map(match => (
//             <div key={match.id} onClick={() => setSelectedMatch(match)}>
//               <MatchCard match={match} />
//             </div>
//           ))}
//         </div>
//       </div>
//       <div>
//         <h3 className="text-white text-xl mb-4">Completed Matches</h3>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {matches.filter(m => m.status === 'completed').map(match => (
//             <div key={match.id} onClick={() => setSelectedMatch(match)}>
//               <MatchCard match={match} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MatchesPage;
import React, { useState } from 'react';
import { ChevronLeft, Clock, MapPin, Trophy } from 'lucide-react';

// Assuming these are imported from a separate file
// import { matches, teams } from '../data';

const matches = [
  { id: 1, team1: 'MI', team2: 'CSK', score1: '189/5', score2: '182/7', status: 'completed', time: '7:30 PM', venue: 'Wankhede Stadium' },
  { id: 2, team1: 'RCB', team2: 'KKR', status: 'live', time: '3:30 PM', venue: 'M. Chinnaswamy Stadium' },
  { id: 3, team1: 'DC', team2: 'PBKS', status: 'upcoming', time: '7:30 PM', venue: 'Arun Jaitley Stadium' },
];

const teams = {
  MI: { name: 'Mumbai Indians', color: '#004BA0' },
  CSK: { name: 'Chennai Super Kings', color: '#F9CD05' },
  RCB: { name: 'Royal Challengers Bangalore', color: '#FF1744' },
  KKR: { name: 'Kolkata Knight Riders', color: '#7C4E93' },
  DC: { name: 'Delhi Capitals', color: '#0078BC' },
  PBKS: { name: 'Punjab Kings', color: '#ED1B24' },
};

const MatchCard = ({ match }) => (
  <div className="bg-white bg-opacity-10 shadow-lg rounded-lg overflow-hidden border-t-4 transition-all duration-300 hover:bg-opacity-20" style={{ borderColor: teams[match.team1].color }}>
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex-1">
          <p className="font-semibold text-lg text-white" style={{ color: teams[match.team1].color }}>{teams[match.team1].name}</p>
          {match.score1 && <p className="text-xl font-bold text-white">{match.score1}</p>}
        </div>
        <div className="text-center flex-1">
          <p className="text-sm font-medium text-yellow-400 uppercase">{match.status}</p>
          <p className="text-lg font-bold text-white">VS</p>
        </div>
        <div className="flex-1 text-right">
          <p className="font-semibold text-lg text-white" style={{ color: teams[match.team2].color }}>{teams[match.team2].name}</p>
          {match.score2 && <p className="text-xl font-bold text-white">{match.score2}</p>}
        </div>
      </div>
      <div className="flex justify-between text-sm text-gray-300">
        <p className="flex items-center"><Clock size={16} className="mr-1" /> {match.time}</p>
        <p className="flex items-center"><MapPin size={16} className="mr-1" /> {match.venue}</p>
      </div>
    </div>
  </div>
);

const MatchesPage = () => {
  const [selectedMatch, setSelectedMatch] = useState(null);

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
              <MatchCard match={selectedMatch} />
            </div>
          ) : (
            <>
              <section className="mb-12">
                <h2 className="text-white text-2xl font-semibold mb-6">Live & Upcoming Matches</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {matches
                    .filter(m => m.status === 'live' || m.status === 'upcoming')
                    .map(match => (
                      <div key={match.id} onClick={() => setSelectedMatch(match)} className="cursor-pointer">
                        <MatchCard match={match} />
                      </div>
                    ))}
                </div>
              </section>
              
              <section>
                <h2 className="text-white text-2xl font-semibold mb-6">Completed Matches</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {matches
                    .filter(m => m.status === 'completed')
                    .map(match => (
                      <div key={match.id} onClick={() => setSelectedMatch(match)} className="cursor-pointer">
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