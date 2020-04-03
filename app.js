const express = require("express");
const app = express();

const index = require("./routes/index");
app.use(index);

const http = require("http");
const server = http.createServer(app);

const socketIo = require("socket.io");
const io = socketIo(server);

const port = process.env.PORT || 4001;

io.on("connection", (clientSocket) => {
  console.log("New client connected");
  clientSocket.on("disconnect", () => {
    console.log("Client disconnected", clientSocket.id)
  });
});

server.listen(port, () => console.log(`Listening on port ${port}`));