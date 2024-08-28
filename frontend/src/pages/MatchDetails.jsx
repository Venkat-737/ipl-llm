import React from 'react';
import { Clock, MapPin, Award } from 'lucide-react';
import CommentarySection from '../components/CommentarySection.jsx';


const MatchDetails = ({ match }) => {
  const calculateTotalScore = (innings) => {
    return innings.reduce((total, over) => total + over.runs_conceded, 0);
  };

  const calculateTotalWickets = (innings) => {
    return innings.reduce((total, over) => total + over.wickets, 0);
  };

 const renderInnings = (innings, inningsName) => (
  <div>
    <h3 className="text-xl font-semibold mb-2">{inningsName}</h3>
    <p className="mb-2">Total Score: {calculateTotalScore(innings)}/{calculateTotalWickets(innings)}</p>
    <div className="max-h-80 overflow-y-auto">
      {innings.map((over, index) => (
        <div key={index} className="mb-2 bg-indigo-900 rounded-lg p-3 shadow-md">
          <div className="flex justify-between items-center">
            <span className="font-bold text-yellow-300">Over {over.over + 1}</span>
            <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-sm">{over.bowler}</span>
          </div>
          <div className="mt-2 grid grid-cols-3 gap-2 text-sm">
            <div className="bg-black bg-opacity-30 p-1 rounded">
              <span className="text-green-400">Runs:</span> {over.runs_conceded}
            </div>
            <div className="bg-black bg-opacity-30 p-1 rounded">
              <span className="text-red-400">Wickets:</span> {over.wickets}
            </div>
            <div className="bg-black bg-opacity-30 p-1 rounded">
              <span className="text-blue-400">Extras:</span> {over.extras.wides + over.extras.no_balls}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

  
  return (
    <div className="bg-white bg-opacity-10 rounded-lg p-6 text-white">
      <h2 className="text-3xl font-bold mb-4">{match.team1.name} vs {match.team2.name}</h2>
      <div className="grid grid-cols-2 gap-4 mb-6">
<div>
  <p className="font-semibold">Date:</p>
  <p className="flex items-center"><Clock size={16} className="mr-2" /> {new Date(match.date).toLocaleDateString()}</p>
</div>
<div>
  <p className="font-semibold">Venue:</p>
  <p className="flex items-center"><MapPin size={16} className="mr-2" /> {match.venue.name}, {match.venue.city}</p>
</div>
<div>
  <p className="font-semibold">Match Type:</p>
  <p>{match.match_type}</p>
</div>
<div>
  <p className="font-semibold">Result:</p>
  <p>{match.result.winner === match.team1._id ? match.team1.name : match.team2.name} won by {match.result.margin}</p>
</div>
</div>

<div className="mb-6">
<p className="font-semibold flex items-center"><Award size={16} className="mr-2" /> Man of the Match:</p>
<p>{match.result.man_of_the_match ? match.result.man_of_the_match.name : 'Not available'}</p>
</div>
      
      <div className="grid grid-cols-2 gap-8">
        {renderInnings(match.first_innings, "First Innings")}
        {renderInnings(match.second_innings, "Second Innings")}
      </div>
      <CommentarySection matchId={match._id} team1={match.team1.name}
  team2={match.team2.name}
  venue={match.venue.name} />
    </div>
  );
};

export default MatchDetails;




