import React, { useState } from 'react';
import GameRoom from './components/GameRoom';

function App() {
  const [playerName, setPlayerName] = useState('');
  const [roomCode, setRoomCode] = useState('');
  const [inGame, setInGame] = useState(false);

  const handleJoinGame = () => {
    if (playerName && roomCode) {
      setInGame(true);
    }
  };

  return (
    <div className="App">
      {!inGame ? (
        <div>
          <h1>Impostor Game</h1>
          <input
            type="text"
            placeholder="Enter your name"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter room code"
            value={roomCode}
            onChange={(e) => setRoomCode(e.target.value)}
          />
          <button onClick={handleJoinGame}>Join Game</button>
        </div>
      ) : (
        <GameRoom playerName={playerName} roomCode={roomCode} />
      )}
    </div>
  );
}

export default App;