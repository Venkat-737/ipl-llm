import React from 'react';
import { Clock, MapPin } from 'lucide-react';

const MatchCard = ({ match }) => {
    if (!match || !match.team1 || !match.team2) {
      return <div className="bg-white p-4 rounded-lg">Invalid match data</div>;
    }
  
    return (
      <div
        className="bg-white bg-opacity-10 shadow-lg rounded-2xl overflow-hidden border-t-4 transition-all duration-300 hover:bg-opacity-20"
        style={{ borderColor: '#000' }}
      >
        <div className="p-4">
          <div className="flex justify-between  items-center mb-4">
            <div className="flex-1">
              <p className="font-semibold text-lg text-white">
                {match.team1.name}
              </p>
            </div>
            <div className="text-center flex-1">
              <p className="text-sm font-medium text-yellow-400 uppercase">{match.match_type || 'N/A'}</p>
              <p className="text-lg font-bold text-white">VS</p>
            </div>
            <div className="flex-1 text-right">
              <p className="font-semibold text-lg text-white">
                {match.team2.name}
              </p>
            </div>
          </div>
          <div className="flex justify-between text-sm text-gray-300">
            <p className="flex items-center"><Clock size={16} className="mr-1" /> {new Date(match.date).toLocaleDateString()}</p>
            <p className="flex items-center"><MapPin size={16} className="mr-1" /> {match.venue.name || 'N/A'}</p>
          </div>
        </div>
      </div>
    );
  };
  
export default MatchCard;
