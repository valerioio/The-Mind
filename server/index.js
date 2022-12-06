const io = require("socket.io")(5000, {
  cors: {
    origin: [
      "http://localhost:3000",
      "http://localhost:3001",
      "http://localhost:3002",
    ],
  },
});

io.on("connection", (socket) => {
  socket.on("join-room", (name, room) => {
    socket.join(room);
    socket.to(room).emit("joined-room", name);
  });
});
