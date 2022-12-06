export default function WaitingRoom({ socket, players }) {
  return (
    <>
      <h1>The Mind</h1>

      <ul>
        {players.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
      <button onClick={() => socket.emit("start-game")}>Start</button>
    </>
  );
}
