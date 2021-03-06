const shuffleSeed = require('shuffle-seed')
const words = require('./words.js')
const wordsGreek = require('./wordsGreek.js')

class Room{
  constructor (roomName, language){
    this.wordList = this.wordListGenerator(language);
    this.roomName = roomName;
    this.turn = "red";
    this.clients = {};
    this.msgList = {};
    this.msgId = 0;
  }

  wordListGenerator(language){
    var wordList = [];
    if(language==="greek"){
      wordList = wordsGreek;
    }else{
      wordList = words;
    }
    var seed = Math.random()*1000000;
    wordList = shuffleSeed.shuffle(wordList, seed).slice(0, 25);
    var temp = wordList.map((word, index) => {
      if (index === 0) {
        return {id: index, word: word, type: "bomb", state: "hidden"}
      } else if (index < 8) {
        return {id: index, word: word, type: "neutral", state: "hidden"}
      } else if (index < 16) {
        return {id: index, word: word, type: "blue", state: "hidden"}
      } else {
        return {id: index, word: word, type: "red", state: "hidden"}
      }
    })
    return shuffleSeed.shuffle(temp, seed);
  }

  nextTurn(){
    if(turn==="red"){
      turn = "blue";
    }else{
      turn = "red";
    }
  }

  addClient(id, usr){
    this.clients[id] = {id: id, spymaster: false, username: usr};
  }

  removeClient(id){
    delete this.clients[id];
  }

  changeSpymasterStatus(id){
    this.clients[id] = !this.clients[id];
  }

  newGame(language){
    this.wordList = this.wordListGenerator(language);
  }

  openCard(id){
    var idx = this.wordList.findIndex(item => item.id == id)
    this.wordList[idx].state = "open";
  }

  addMessage(username, message){
    this.msgList[this.msgId] = {"id": this.msgId, "username": username, "message": message};
    this.msgId += 1;
  }
}

module.exports = Room