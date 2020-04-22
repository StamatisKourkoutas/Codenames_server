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

    try {
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
    } catch (error) {
      console.log("Error 1")
    }
  });

  clientSocket.on("disconnect", () => {
    console.log("Client:", clientSocket.id, "disconnected from server")
  });

  clientSocket.on("JoinRoom", (roomName, language) => {
    console.log("Client:", clientSocket.id, "joined room:", roomName);
    try{
      // Create room for first client
      if (!(roomName in myRooms)){
        myRooms[roomName] = new Room(roomName, language);
      }

      // Join room
      clientSocket.join(roomName);
      var usr = "";
      if(clientSocket.id in users){
        usr = users[clientSocket.id]
      }else{
        usr = "Guest_"+(Math.floor(Math.random() * 99)+1);
      }
      myRooms[roomName].addClient(clientSocket.id, usr);

      // Notify everyone in the room about all others
      console.log(myRooms[roomName].clients)
      io.sockets.in(roomName).emit("ClientsUpdate", myRooms[roomName].clients);
      io.sockets.in(roomName).emit("BoardUpdate", myRooms[roomName].wordList);//
    } catch (error) {
      console.log("Error 2")
    }
  });

  clientSocket.on("LeaveRoom", (roomName) => {
    console.log("Client:", clientSocket.id, "left room:", roomName);
    try{
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
    } catch (error) {
      console.log("Error 3")
    }
  });

  clientSocket.on("SpymasterChange", (clients,roomName) => {
    console.log("Client:", clientSocket.id, "changed spymaster in:", roomName);
    try{
      myRooms[roomName].clients = clients;

      // Notify everyone in the room about all others
      console.log(myRooms[roomName].clients)
      io.sockets.in(roomName).emit("ClientsUpdate", myRooms[roomName].clients);
    } catch (error) {
      console.log("Error 4")
    }
  });

  clientSocket.on("NewGame", (roomName, language) => {
    console.log("Client:", clientSocket.id, "started new game in:", roomName);
    try{
    myRooms[roomName].newGame(language);

    // Notify everyone in the room about change
    io.sockets.in(roomName).emit("BoardUpdate", myRooms[roomName].wordList);
    } catch (error) {
      console.log("Error 5")
    }
  });

  clientSocket.on("WordListChange", (id,roomName) => {
    console.log("Client:", clientSocket.id, "opened word", id, "in:", roomName);
    try{
      myRooms[roomName].openCard(id);

      // Notify everyone in the room about change
      io.sockets.in(roomName).emit("BoardUpdate", myRooms[roomName].wordList);
    } catch (error) {
      console.log("Error 6")
    }
  });

  clientSocket.on("ChangeUsername", (usr) => {
    console.log("Client:", clientSocket.id, "set username:", usr);
    users[clientSocket.id]=usr;
  });

  clientSocket.on("MsgChange", (roomName, username, message) => {
    console.log("Client:", clientSocket.id, "sent mesage in:", roomName);
    try{
      myRooms[roomName].addMessage(username, message);

      // Notify everyone in the room about change
      console.log(myRooms[roomName].msgList)
      io.sockets.in(roomName).emit("MsgUpdate", myRooms[roomName].msgList);
    } catch (error) {
      console.log("Error 7")
    }
  });
});

server.listen(port, () => console.log(`Listening on port ${port}`));
