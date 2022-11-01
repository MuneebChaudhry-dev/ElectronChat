const express = require("express");
const { Server } = require("socket.io");
const { createServer } = require("http");
// you need to set up a local server and basic socket connection Here
// App setup
const PORT = 3000;
const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});
server.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});

// Static files
app.use(express.static("public"));

// Socket setupserver

io.on("connection", function (socket) {
  console.log("Made socket connection");
  socket.username = "Anonymous";
  socket.on("change_username", (data) => {
    socket.username = data.username;
  });
  socket.on("new_message", (data) => {
    io.sockets.emit("new_message", {
      message: data.message,
      username: socket.username,
    });
  });
});
