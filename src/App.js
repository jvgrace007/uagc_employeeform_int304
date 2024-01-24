// App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DnDSignup from './Components/DnDSignup';
import DnDPlayerDetail from './Components/DnDPlayerDetail';
import Heroes from './Components/Heroes';

function App() {
  const [players, setPlayers] = useState([]);

  const addPlayer = (player) => {
    setPlayers([...players, player]);
  };

  const saveData = () => {
    localStorage.setItem('players', JSON.stringify(players));
  };

  useEffect(() => {
    const savedPlayers = JSON.parse(localStorage.getItem('players'));
    if (savedPlayers) {
      setPlayers(savedPlayers);
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="app-container">
        <Routes>
          <Route path="/" element={
            <>
              <DnDSignup onSubmit={addPlayer} />
              <Heroes players={players} onSaveData={saveData} />
            </>
          } />
          <Route path="/players/:id" element={<DnDPlayerDetail players={players} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
