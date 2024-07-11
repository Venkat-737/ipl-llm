import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import MatchesPage from './pages/MatchesPage';
import PlayerComparisonPage from './pages/PlayerComparisonPage';
import TablePage from './pages/TablePage';
import MatchDetails from './components/MatchDetails';
import StatisticsPage from './pages/StatisticsPage';
import ChatBot from './components/ChatBot';

const App = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <Router>
      <div className="bg-gray-900 min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/matches" element={<MatchesPage />} />
          <Route path="/matches/:id" element={<MatchDetails />} />
          <Route path="/player-comparison" element={<PlayerComparisonPage />} />
          <Route path="/table" element={<TablePage />} />
          <Route path="/statistics" element={<StatisticsPage />} />
        </Routes>
        <button 
          onClick={toggleChat}
          className="fixed bottom-4 right-4 bg-blue-600 hover:bg-blue-700 text-white text-sm  rounded-lg w-24 h-12 flex items-center justify-center shadow-lg transition duration-300"
        >
          Fan Query Chatbot
        </button>
        {isChatOpen && <ChatBot onClose={toggleChat} />}
      </div>
    </Router>
  );
};

export default App;
