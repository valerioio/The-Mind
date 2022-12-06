import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home({ socket, addPlayer }) {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  const navigate = useNavigate();

  return (
    <>
      <h1>The Mind</h1>

      <input
        type="text"
        value={name}
        onChange={(value) => setName(value.target.value)}
      />
      <label htmlFor="name">Name</label>

      <input
        type="text"
        value={room}
        onChange={(value) => setRoom(value.target.value)}
      />
      <label htmlFor="room">Room</label>

      <button
        onClick={() => {
          socket.emit("join-room", name, room);
          addPlayer(name);
          navigate("waiting-room");
        }}
      >
        Enter
      </button>
    </>
  );
}
