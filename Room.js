const shuffleSeed = require('shuffle-seed')
const words = require('./words.js')

class Room{
  constructor (roomName){
    this.wordList = this.wordListGenerator();
    this.roomName = roomName;
    this.turn = "red";
    this.clients = {};
  }

  wordListGenerator(){
    var seed = Math.random()*1000000;
    var wordList = shuffleSeed.shuffle(words, seed).slice(0, 25);
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

  initialiseRoom(){
    return wordListGenerator(words)
  };

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

  openCard(id){
    var idx = this.wordList.findIndex(item => item.id == id)
    this.wordList[idx].state = "open";
  }
}

module.exports = Room