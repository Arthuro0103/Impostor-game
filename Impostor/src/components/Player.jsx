import PropTypes from "prop-types";

function Player({ name, isCurrentPlayer, onKill }) {
  return (
    <div>
      {name} {isCurrentPlayer ? "(You)" : ""}
      {!isCurrentPlayer && <button onClick={onKill}>Kill</button>}
    </div>
  );
}

Player.propTypes = {
  name: PropTypes.string.isRequired,
  isCurrentPlayer: PropTypes.bool.isRequired,
  onKill: PropTypes.func.isRequired,
};

export default Player;
