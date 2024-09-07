import React from "react";

function Player({ name, isCurrentPlayer, onKill }) {
  return (
    <div>
      {name} {isCurrentPlayer ? "(You)" : ""}
      {!isCurrentPlayer && <button onClick={onKill}>Kill</button>}
    </div>
  );
}

export default Player;
