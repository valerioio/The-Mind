import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { io } from "socket.io-client";
import { Root, Playground, WaitingRoom } from "./routes";
import "./index.css";

const socket = io("http://localhost:3000");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "waiting-room",
    element: <WaitingRoom />,
  },
  {
    path: "playground",
    element: <Playground />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
