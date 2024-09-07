import  { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Player from "./Player";
import Tasks from "./Tasks";
import { assignRoles, checkGameEnd } from "../utils/gameLogic";

function GameRoom({ playerName, roomCode }) {
  const [players, setPlayers] = useState([]);
  const [isImpostor, setIsImpostor] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    // Simulating player join
    const newPlayers = [playerName, "Player 2", "Player 3", "Player 4"];
    setPlayers(newPlayers);

    // Assign roles
    const { impostors } = assignRoles(newPlayers);
    setIsImpostor(impostors.includes(playerName));
  }, [playerName]);

  const handleKill = (target) => {
    if (isImpostor) {
      setPlayers(players.filter((p) => p !== target));
      const gameStatus = checkGameEnd(players.length - 1, isImpostor);
      if (gameStatus) {
        setGameOver(true);
        setWinner(gameStatus);
      }
    }
  };

  const handleCompleteTask = () => {
    const gameStatus = checkGameEnd(players.length, isImpostor);
    if (gameStatus) {
      setGameOver(true);
      setWinner(gameStatus);
    }
  };

  return (
    <div>
      <h2>Room: {roomCode}</h2>
      <h3>Players:</h3>
      {players.map((player) => (
        <Player
          key={player}
          name={player}
          isCurrentPlayer={player === playerName}
          onKill={() => handleKill(player)}
        />
      ))}
      <Tasks isImpostor={isImpostor} onCompleteTask={handleCompleteTask} />
      {gameOver && <h2>{winner} Win!</h2>}
    </div>
  );
}

GameRoom.propTypes = {
  playerName: PropTypes.string.isRequired,
  roomCode: PropTypes.string.isRequired,
};

export default GameRoom;
