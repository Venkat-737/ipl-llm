// src/components/Navbar.jsx
// import React from 'react';

// const Navbar = ({ activeTab, setActiveTab }) => {
//   const tabs = ['Home', 'Matches', 'Player Comparison', 'Table'];

//   return (
//     <nav className="bg-gray-900 text-gray-300 p-4 flex justify-between items-center border-b border-gray-700">
//       <div className="flex space-x-6">
//         {tabs.map((tab) => (
//           <button
//             key={tab}
//             className={`${activeTab === tab ? 'text-purple-400 border-b-2 border-purple-400' : 'hover:text-white'} transition duration-300`}
//             onClick={() => setActiveTab(tab)}
//           >
//             {tab}
//           </button>
//         ))}
//       </div>
//       <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition duration-300">Login</button>
//     </nav>
//   );
// };

// export default Navbar;
import React from 'react';

const Navbar = ({ activeTab, setActiveTab }) => {
  return (
    <nav className="bg-gray-900 text-gray-300 p-4 flex justify-between items-center border-b border-gray-700">
      <div className="flex space-x-6">
        <button
          className={`text-white ${activeTab === 'Home' ? 'text-purple-400 border-b-2 border-purple-400' : 'hover:text-purple-400'} transition duration-300`}
          onClick={() => setActiveTab('Home')}
        >
          Home
        </button>
        <button
          className={`text-white ml-4 ${activeTab === 'Matches' ?  'text-purple-400 border-b-2 border-purple-400' : 'hover:text-purple-400'} transition duration-300`}
          onClick={() => setActiveTab('Matches')}
        >
          Matches
        </button>
        <button
          className={`text-white ml-4 ${activeTab === 'Player Comparison' ?  'text-purple-400 border-b-2 border-purple-400' : 'hover:text-purple-400'} transition duration-300`}
          onClick={() => setActiveTab('Player Comparison')}
        >
          Player Comparison
        </button>
        <button
          className={`text-white ml-4 ${activeTab === 'Table' ?  'text-purple-400 border-b-2 border-purple-400' : 'hover:text-purple-400'} transition duration-300`}
          onClick={() => setActiveTab('Table')}
        >
          Table
        </button>
        <button
          className={`text-white ml-4 ${activeTab === 'Statistics' ?  'text-purple-400 border-b-2 border-purple-400' : 'hover:text-purple-400'} transition duration-300`}
          onClick={() => setActiveTab('Statistics')}
        >
          Statistics
        </button>
      </div>
      <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition duration-300">Login</button>
    </nav>
  );
};

export default Navbar;

