export function assignRoles(players) {
  const shuffled = [...players].sort(() => 0.5 - Math.random());
  const impostorCount = Math.max(1, Math.floor(players.length / 5));
  const impostors = shuffled.slice(0, impostorCount);
  const crew = shuffled.slice(impostorCount);
  return { impostors, crew };
}

export function checkGameEnd(playerCount, isImpostor) {
  if (isImpostor && playerCount <= 2) {
    return "Impostors";
  }
  if (!isImpostor && playerCount <= 1) {
    return "Impostors";
  }
  return null;
}
