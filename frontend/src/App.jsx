import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import MatchesPage from './pages/MatchesPage';
import PlayerComparisonPage from './pages/PlayerComparisonPage';
import TablePage from './pages/TablePage';
import MatchDetails from './components/MatchDetails';

const App = () => {
  const [activeTab, setActiveTab] = useState('Home');
  const [selectedMatch, setSelectedMatch] = useState(null);

  return (
    <div className="bg-gray-900 min-h-screen">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === 'Home' && <Home />}
      {activeTab === 'Matches' && (
        selectedMatch ? (
          <MatchDetails match={selectedMatch} onBack={() => setSelectedMatch(null)} />
        ) : (
          <MatchesPage setSelectedMatch={setSelectedMatch} />
        )
      )}
      {activeTab === 'Player Comparison' && <PlayerComparisonPage />}
      {activeTab === 'Table' && <TablePage />}
      <button className="fixed bottom-4 right-4 bg-blue-600 hover:bg-blue-700 text-white text-xs rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition duration-300">
        Fan Q
      </button>
    </div>
  );
};

export default App;
