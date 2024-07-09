export const teams = {
    TeamA: { color: '#FF0000' },
    TeamB: { color: '#00FF00' },
    TeamC: { color: '#0000FF' },
    TeamD: { color: '#FFFF00' },
    TeamE: { color: '#FF00FF' },
    TeamF: { color: '#00FFFF' },
  };
  
  export const matches = [
    {
      id: 1,
      team1: 'TeamA',
      team2: 'TeamB',
      status: 'live',
      score1: '150/3',
      score2: '140/4',
      time: '12:00 PM',
      venue: 'Stadium 1',
    },
    {
      id: 2,
      team1: 'TeamC',
      team2: 'TeamD',
      status: 'upcoming',
      time: '4:00 PM',
      venue: 'Stadium 2',
    },
    {
      id: 3,
      team1: 'TeamE',
      team2: 'TeamF',
      status: 'completed',
      score1: '160/5',
      score2: '150/6',
      time: '8:00 PM',
      venue: 'Stadium 3',
    },
  ];
  
  export const playerStats = [
    { name: 'Player 1', team: 'TeamA', runs: 500, avg: 50, sr: 130, matches: 20, wickets: 10, economy: 7.0 },
    { name: 'Player 2', team: 'TeamB', runs: 450, avg: 45, sr: 120, matches: 22, wickets: 15, economy: 6.5 },
    { name: 'Player 3', team: 'TeamC', runs: 600, avg: 55, sr: 140, matches: 25, wickets: 20, economy: 7.5 },
    { name: 'Player 4', team: 'TeamD', runs: 350, avg: 35, sr: 110, matches: 18, wickets: 12, economy: 7.8 },
    // Add more player stats as needed
  ];
  