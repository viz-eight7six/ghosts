const Board = require("./board");
const Pacman = require("./pacman");
const Game = require("./game");

document.addEventListener("DOMContentLoaded", function(){
  const canvasEl = document.getElementById("pacmanCanvas");
  const ctx = canvasEl.getContext("2d");

  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvasEl.width, canvasEl.height);
  const game = new Game(ctx);
  let play = false;
  if (play === false) {
    setTimeout( play = true, 1000);
  }
  if(play){
    game.start();
  }
  // const pacman = new Pacman(300, 390);
});
