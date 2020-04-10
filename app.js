var Room = require('./Room.js')

const express = require("express");
const app = express();

const index = require("./routes/index");
app.use(index);

const http = require("http");
const server = http.createServer(app);

const socketIo = require("socket.io");
const io = socketIo(server);

const port = process.env.PORT || 4001;

var myRooms = {}
var users = {}

io.on("connection", (clientSocket) => {
  console.log("Client:", clientSocket.id, "connected to server");
  
  clientSocket.on("disconnecting", () => {
    console.log("Client:", clientSocket.id, "disconnecting from server")

    Object.keys(clientSocket.rooms).forEach(roomName => {
      if(clientSocket.id!=roomName){
        // Delete from room
        myRooms[roomName].removeClient(clientSocket.id);
        
        // Notify everyone in the room about all others
        console.log(myRooms[roomName].clients)
        if(Object.keys(myRooms[roomName].clients).length>0){
          io.sockets.in(roomName).emit("ClientsUpdate", myRooms[roomName].clients);
        }else{
          delete myRooms[roomName]
        }

        //clients = Object.keys(io.sockets.adapter.rooms[roomName].sockets);
        //clients2 = clients.filter(client => client!==clientSocket.id);     
      };
    });
  });

  clientSocket.on("disconnect", () => {
    console.log("Client:", clientSocket.id, "disconnected from server")
  });

  clientSocket.on("JoinRoom", (roomName, language) => {
    console.log("Client:", clientSocket.id, "joined room:", roomName);

    // Create room for first client
    if (!(roomName in myRooms)){
      myRooms[roomName] = new Room(roomName, language);
    }

    // Join room
    clientSocket.join(roomName);
    var usr = "";
    if(clientSocket.id in users){
      usr=users[clientSocket.id]
    }
    myRooms[roomName].addClient(clientSocket.id, usr);

    // Notify everyone in the room about all others
    console.log(myRooms[roomName].clients)
    io.sockets.in(roomName).emit("ClientsUpdate", myRooms[roomName].clients);
    io.sockets.in(roomName).emit("BoardUpdate", myRooms[roomName].wordList);//
  });

  clientSocket.on("LeaveRoom", (roomName) => {
    console.log("Client:", clientSocket.id, "left room:", roomName);

    // Leave room and delete from room
    clientSocket.leave(roomName);
    myRooms[roomName].removeClient(clientSocket.id);

    // Notify everyone in the room about all others
    console.log(myRooms[roomName].clients)
    if(Object.keys(myRooms[roomName].clients).length>0){
      io.sockets.in(roomName).emit("ClientsUpdate", myRooms[roomName].clients);
    }else{
      delete myRooms[roomName]
    }
  });

  clientSocket.on("SpymasterChange", (clients,roomName) => {
    console.log("Client:", clientSocket.id, "changed spymaster in:", roomName);

    myRooms[roomName].clients = clients;

    // Notify everyone in the room about all others
    console.log(myRooms[roomName].clients)
    io.sockets.in(roomName).emit("ClientsUpdate", myRooms[roomName].clients);
  });

  clientSocket.on("WordListChange", (id,roomName) => {
    console.log("Client:", clientSocket.id, "oppened word", id, "in:", roomName);

    myRooms[roomName].openCard(id);

    // Notify everyone in the room about change
    io.sockets.in(roomName).emit("BoardUpdate", myRooms[roomName].wordList);
  });

  clientSocket.on("ChangeUsername", (usr) => {
    console.log("Client:", clientSocket.id, "set username:", usr);
    users[clientSocket.id]=usr;
  })
});

server.listen(port, () => console.log(`Listening on port ${port}`));
