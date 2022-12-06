import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { io } from "socket.io-client";
import { Home, Playground, WaitingRoom } from "../../routes";

const socket = io("http://localhost:5000");

export default function App() {
  const [players, setPlayers] = useState([]);
  const addPlayer = (name) => setPlayers([...players, name]);

  socket.on("joined-room", (name) => addPlayer(name));

  const router = createBrowserRouter([
    { path: "/", element: <Home socket={socket} addPlayer={addPlayer} /> },
    {
      path: "waiting-room",
      element: <WaitingRoom socket={socket} players={players} />,
    },
    {
      path: "playground",
      element: <Playground socket={socket} players={players} />,
    },
  ]);

  return (
    <>
      <button onClick={() => console.log(players)}>clickme</button>
      <RouterProvider router={router} />
    </>
  );
}
