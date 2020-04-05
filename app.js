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
  // Log connection to server
  console.log("Client:", clientSocket.id, "connected to server");
  
  clientSocket.on("disconnecting", () => {
    Object.keys(clientSocket.rooms).forEach(roomName => {
      if(clientSocket.id!=roomName){
        //console.log("Notify room", roomName, "for imminent disconect");
        clients = Object.keys(io.sockets.adapter.rooms[roomName].sockets);
        clients2 = clients.filter(client => client!==clientSocket.id);

        // Notify everyone in the room about all others
        io.sockets.in(roomName).emit("ClientUpdate", clients2);
      };
    });
  });

  clientSocket.on("disconnect", () => {
    console.log("Client:", clientSocket.id, "disconnected from server")
  });

  clientSocket.on("JoinRoom", (roomName) => {
    // Log join to a room
    console.log("Client:", clientSocket.id, "joined room:", roomName);
    // Join room
    clientSocket.join(roomName);
    // Notify everyone in the room about all others
    clients = Object.keys(io.sockets.adapter.rooms[roomName].sockets)
    io.sockets.in(roomName).emit("ClientUpdate", clients);

    //console.log(io.sockets.adapter.rooms[roomName]); // for debug
  });

  clientSocket.on("LeaveRoom", (roomName) => {
    // Log leave from a room
    console.log("Client:", clientSocket.id, "left room:", roomName);
    // Leave room
    clientSocket.leave(roomName);
    // Notify everyone in the room about all others
    clients = Object.keys(io.sockets.adapter.rooms[roomName].sockets)
    io.sockets.in(roomName).emit("ClientUpdate", clients);
  });
});

server.listen(port, () => console.log(`Listening on port ${port}`));
