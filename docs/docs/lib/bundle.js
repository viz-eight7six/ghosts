/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

const MAP = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 4, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 4, 0],
  [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0],
  [0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0],
  [0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0],
  [2, 2, 2, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 2, 2, 2],
  [0, 0, 0, 0, 1, 0, 1, 0, 0, 3, 0, 0, 1, 0, 1, 0, 0, 0, 0],
  [2, 2, 2, 0, 1, 1, 1, 0, 2, 2, 2, 0, 1, 1, 1, 0, 2, 2, 2],
  [0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0],
  [2, 2, 2, 0, 1, 0, 1, 1, 1, 2, 1, 1, 1, 0, 1, 0, 2, 2, 2],
  [0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0],
  [0, 4, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 4, 0],
  [0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0],
  [0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

const CANVAS_HEIGHT = 660;
const CANVAS_WIDTH = 570;

const WALL = 0;
const FOOD = 1;
const POWER = 4;
const EMPTY = 2;
const WALL_COLOR = "blue";
const BLOCK_WIDTH = 30;
const BLOCK_HEIGHT = 30;

class Block {
  constructor(ctx, x, y, isWall, foodType=undefined){
    this.x = x;
    this.y = y;
    this.ctx = ctx;
    this.isWall = isWall;
    this.foodType = foodType;
  }

  drawWall(x, y)  {
    this.ctx.fillStyle = WALL_COLOR;
  	this.ctx.fillRect(x, y, BLOCK_WIDTH, BLOCK_HEIGHT);
  }

  drawEmpty(x, y)  {
  }

  drawGate(x, y)  {
    this.ctx.fillStyle = "white";
  	this.ctx.fillRect(x, y+BLOCK_HEIGHT/2, BLOCK_WIDTH, BLOCK_HEIGHT/2);
  }

  drawFood(x, y) {
    const centerX = x + 15;
    const centerY = y + 15;
    this.ctx.beginPath();
    this.ctx.fillStyle = "yellow";
    this.ctx.arc(centerX, centerY, 2, 0, 2*Math.PI, true);
    this.ctx.fill();
  }

  drawPower(x, y) {
    const centerX = x + 15;
    const centerY = y + 15;
    this.ctx.beginPath();
    this.ctx.fillStyle = "yellow";
    this.ctx.arc(centerX, centerY, 4, 0, 2*Math.PI, true);
    this.ctx.fill();
  }

}

module.exports = Block;

class Board {
  constructor(ctx, map = MAP){
    this.ctx = ctx;
    this.map = map;
    this.maze = new Array(22);
    for (var i = 0; i < 22; i++) {
      this.maze[i] = new Array(19);
    }
    this.pellets = 0;
  }

  initMap() {
    this.ctx.clearRect(0, 0, 570, 660);
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(0, 0, 570, 660);
    this.map.forEach((row, y) => (row.forEach((block, x) => {
      let xPix = x*30;
      let yPix = y*30;
      let newBlock;
      switch(block){
        case 0:
        newBlock = new Block(this.ctx, xPix, yPix, true);
        this.maze[y][x] = newBlock;
        return newBlock.drawWall(xPix, yPix);
        case 1:
        newBlock = new Block(this.ctx, xPix, yPix, false, "food");
        this.maze[y][x] = newBlock;
        this.pellets += 1;
        return newBlock.drawFood(xPix, yPix);
        case 2:
        newBlock = new Block(this.ctx, xPix, yPix, false);
        this.maze[y][x] = newBlock;
        return newBlock.drawEmpty(xPix, yPix);
        case 3:
        newBlock = new Block(this.ctx, xPix, yPix, false, "gate");
        this.maze[y][x] = newBlock;
        return newBlock.drawGate(xPix, yPix);
        case 4:
        newBlock = new Block(this.ctx, xPix, yPix, false, "power");
        this.maze[y][x] = newBlock;
        this.pellets += 1;
        return newBlock.drawPower(xPix, yPix);
      }
    })));
  }

  drawMap() {
    this.ctx.clearRect(0, 0, 570, 660);
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(0, 0, 570, 660);
    this.maze.forEach((row, y) => (row.forEach((block, x) => {
      let xPix = x*30;
      let yPix = y*30;
      if(block.isWall){
        return block.drawWall(xPix, yPix);
      }
      else{
        if(block.foodType === undefined){
          return block.drawEmpty(xPix, yPix);
        }
        else if (block.foodType === "gate") {
          return block.drawGate(xPix, yPix);
        }
        else if (block.foodType === "food") {
          return block.drawFood(xPix, yPix);
        }
        else{
          return block.drawPower(xPix, yPix);
        }
      }
    })));
  }


}


module.exports = Board;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

const Character = __webpack_require__(2);

class Pacman extends Character {
  constructor(x, y, direction, board){
    super();
    this.x = x;
    this.y = y;
    this.dir = direction;
    this.nextDir = undefined;
    this.radius = 9;
    this.mouthOpen = true;
    this.maze = board.maze;
    this.ctx = board.ctx;
    this.xCord = (this.x-15)/30;
    this.yCord = (this.y-15)/30;
    this.powered = false;
    this.poweredTime = 5000;
    this.board = board;
  }

  draw(color = "yellow"){
    this.ctx.fillStyle = color;
    this.ctx.beginPath();
    if (!this.mouthOpen){
  		switch(this.dir){
  			case "UP":
  			this.ctx.arc(this.x, this.y, this.radius, 2*Math.PI-Math.PI*11/18, 2*Math.PI-Math.PI*7/18, true);
  			break;

  			case "DOWN":
  			this.ctx.arc(this.x, this.y, this.radius, 2*Math.PI-Math.PI*29/18, 2*Math.PI-Math.PI*25/18, true);
  			break;

  			case "LEFT":
  			this.ctx.arc(this.x, this.y, this.radius, 2*Math.PI-Math.PI*10/9, 2*Math.PI-Math.PI*8/9, true);
  			break;

  			case "RIGHT":
  			this.ctx.arc(this.x, this.y, this.radius, 2*Math.PI-Math.PI/9, 2*Math.PI-Math.PI*17/9, true);
  			break;

  			default:
  			break;
  		}
  	}
  	else {
  		switch(this.dir){
  			case "UP":
  			this.ctx.arc(this.x, this.y, this.radius, 2*Math.PI-Math.PI*7/9, 2*Math.PI-Math.PI*2/9, true);
  			break;

  			case "DOWN":
  			this.ctx.arc(this.x, this.y, this.radius, 2*Math.PI-Math.PI*16/9, 2*Math.PI-Math.PI*11/9, true);
  			break;

  			case "LEFT":
  			this.ctx.arc(this.x, this.y, this.radius, 2*Math.PI-Math.PI*23/18, 2*Math.PI-Math.PI*13/18, true);
  			break;

  			case "RIGHT":
  			this.ctx.arc(this.x, this.y, this.radius, 2*Math.PI-Math.PI*5/18, 2*Math.PI-Math.PI*31/18, true);
  			break;

  			default:
  			break;

  		}

    }
    this.ctx.lineTo(this.x, this.y);
	  this.ctx.fill();
  }

  normal(){
    this.radius = 9;
    this.powered = false;
  }

  eat(){

    if(this.mouthOpen){
    let xCord = (this.x-15)/30;
    let yCord = (this.y-15)/30;
    let currBlock = this.maze[yCord][xCord];
      if(currBlock.foodType === "food"){
        currBlock.foodType = undefined;
        this.maze[yCord][xCord] = currBlock;
        this.board.pellets -= 1;
      }
      else if (currBlock.foodType === "power"){
        currBlock.foodType = undefined;
        this.maze[yCord][xCord] = currBlock;
        this.radius = 15;
        this.powered = true;
        this.board.pellets -= 1;
        setTimeout(this.normal.bind(this), this.poweredTime);
      }
    }
  }

  move() {
    if(this.onBlockCenter(this.x, this.y) === false){
  		if(this.nextDir !== undefined &&  (
  			(this.dir === "UP" && this.nextDir === "DOWN" )||
  			(this.dir === "DOWN" && this.nextDir === "UP") ||
  			(this.dir === "LEFT" && this.nextDir === "RIGHT") ||
   			(this.dir === "RIGHT" && this.nextDir === "LEFT")
  			))
  		{
  			this.dir = this.nextDir;
  			this.nextDir = undefined;
  		}

  		this.moveOneStep();
      this.eat();
  		return;
  	}
  	else{
  		if(this.nextDir !== undefined && this.canMove(this.x, this.y, this.nextDir, this.maze)){
  			this.dir = this.nextDir;
  			this.nextDir = undefined;
  			this.moveOneStep();
        this.eat();
  		}
  		else{
  			if(this.canMove(this.x, this.y, this.dir, this.maze)){
  				this.moveOneStep();
          this.eat();
  			}
      }
    }
  }

  moveOneStep() {
    let newX =0;
  	let newY =0;
  	if(!this.canMove(this.x, this.y, this.dir, this.maze)){
  		return;
  	}
  	switch(this.dir){
  		case "UP":
  		newY = this.y  - 15;
  		if(newY - this.radius - 30 >= 0){
  			this.y = newY;
  			this.mouthOpen = ! this.mouthOpen;
  		}
  		break;

  		case "DOWN":
  		newY = this.y + 15;
  		if(newY + this.radius + 30 <= 660) {
  			this.y = newY;
  			this.mouthOpen = ! this.mouthOpen;

  		}
  		break;


  		case "LEFT":
  		newX = this.x - 15;
  		if(newX - this.radius - 30 >= 0 ){
  			this.x = newX;
  			this.mouthOpen = ! this.mouthOpen;
  		}
  		break;

  		case "RIGHT":
  		newX = this.x + 15;

  		if(newX + this.radius + 30 <= 570){
  			this.x = newX;
  			this.mouthOpen = ! this.mouthOpen;
  		}
  		break;

  		default:
  		break;
    }

  }
}
module.exports = Pacman;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

const Block = __webpack_require__(0);

class Character {
  canMove(x, y, dir, maze){
    if(!this.onBlockCenter(x,y)){
      return true;
    }
    let xCord = (x-15)/30;
    let yCord = (y-15)/30;
    let newY;
    let newX;
    let dummyCtx;
    let nextBlock;
    switch(dir){
  		case "UP":
  		newY = yCord  - 1;
  		if(newY > 0){
  			nextBlock = maze[newY][xCord];
  		}
  		break;

  		case "DOWN":
  		newY = yCord + 1;
      if(newY < 22){
  			nextBlock = maze[newY][xCord];
  		}
  		break;

  		case "LEFT":
  		newX = xCord - 1;
      if(newX > 0){
  			nextBlock = maze[yCord][newX];
  		}
  		break;

  		case "RIGHT":
      newX = xCord + 1;
      if(newX < 19){
  			nextBlock = maze[yCord][newX];
  		}
  		break;
    }
    let movable = false;
    let isWall = true;
    if(nextBlock){
      isWall = nextBlock.isWall;
    }
    if(!isWall){
      movable = true;
    }
    return movable;
  }

  onBlockCenter(x, y){
    if(((x-15)%30 === 0) && ((y-15)%30 === 0)){
      return true;
    }
    return false;
  }
}

module.exports = Character;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

const Board = __webpack_require__(0);
const Pacman = __webpack_require__(1);
const Ghost = __webpack_require__(4);

class Game {
  constructor(ctx){
    this.board = new Board(ctx);
    this.pacman = new Pacman(285, 375, "RIGHT", this.board);
    this.blinky = new Ghost(285, 315, "UP", this.board, "red");
    this.gamePaused = false;
    this.gameOn = false;
    this.gameOver = false;
    this.interval = 0;
    this.unlocked = true;
    this.ctx = ctx;
    this.pacAuto = true;
    $(window).on("keydown", this.onKeyDown.bind(this));
  }

  getPacMove() {
      setTimeout( ()=> {
        let pacMove = Math.floor(Math.random() * (6-2))+2;
        switch(pacMove){
          case 2:
          this.pacman.nextDir = this.pacman.dir==="UP" ? undefined: "UP";
          break;

          case 3:
          this.pacman.nextDir = this.pacman.dir==="RIGHT"? undefined : "RIGHT";
          break;

          case 4:
          this.pacman.nextDir = this.pacman.dir === "LEFT"? undefined : "LEFT";
          break;

          case 5:
          this.pacman.nextDir = this.pacman.dir === "DOWN"? undefined : "DOWN";
          break;

          default:
          break;
        }
      }, 180);
  }

  updateCanvas(func) {

    if(this.pacAuto){
        this.getPacMove();
      }
    this.board.drawMap();
    if(this.pacman.powered){
      this.blinky.isWeak = true;
    }
    if(!this.pacman.powered){
      this.blinky.isWeak = false;
    }
    this.pacman.move();
    this.pacman.draw();
    this.blinky.move();
    this.blinky.draw();
    if (this.blinky.x === this.pacman.x && this.blinky.y === this.pacman.y){
      if(!this.pacman.powered){
        this.gameOver = true;
        func();
        this.ctx.fillStyle = "black";
        this.ctx.strokeStyle = "#DBA901";
        this.ctx.lineWidth=5;
        this.ctx.fillRect(570/2-150, 660/2-40, 300, 100);
        this.ctx.strokeRect(570/2-150, 660/2-40, 300, 100);

        this.ctx.textAlign="center";
        this.ctx.fillStyle = "white";
        this.ctx.font = "16px Black Ops One";
        this.ctx.fillText("Congratulations, you won!", 570/2, 660/2+6);
        this.ctx.font = "12px Black Ops One";
        this.ctx.fillText("press R to play again", 570/2, 660/2+28);
      }
      else{
        this.gameOver = true;
        func();
        this.ctx.fillStyle = "black";
        this.ctx.strokeStyle = "#DBA901";
        this.ctx.lineWidth=5;
        this.ctx.fillRect(570/2-150, 660/2-40, 300, 100);
        this.ctx.strokeRect(570/2-150, 660/2-40, 300, 100);

        this.ctx.textAlign="center";
        this.ctx.fillStyle = "white";
        this.ctx.font = "16px Black Ops One";
        this.ctx.fillText("You Lose!", 570/2, 660/2+6);
        this.ctx.font = "12px Black Ops One";
        this.ctx.fillText("press R to play again", 570/2, 660/2+28);
      }
    }
    if(this.pacman.board.pellets === 0){
      this.gameOver = true;
      func();
      this.ctx.fillStyle = "black";
      this.ctx.strokeStyle = "#DBA901";
      this.ctx.lineWidth=5;
      this.ctx.fillRect(570/2-150, 660/2-40, 300, 100);
      this.ctx.strokeRect(570/2-150, 660/2-40, 300, 100);

      this.ctx.textAlign="center";
      this.ctx.fillStyle = "white";
      this.ctx.font = "16px Black Ops One";
      this.ctx.fillText("You Lose!", 570/2, 660/2+6);
      this.ctx.font = "12px Black Ops One";
      this.ctx.fillText("press R to play again", 570/2, 660/2+28);
    }

    document.getElementById("pellets").innerHTML = this.pacman.board.pellets;
  }

  unlock(){
    this.unlocked = true;
  }


  onKeyDown (event) {
  	const keycode = event.keyCode;
  	const pauseCode = 81; //q to pause
  	const continueCode = 69; //e to resume
    const replayCode = 82; //r to replay
    const pacmanCode = 80; //p to use pacman

  	const leftCode = 37;
  	const upCode = 38;
  	const rightCode = 39;
  	const downCode = 40;

    const wCode = 87;
    const aCode = 65;
    const sCode = 83;
    const dCode = 68;

  	//start game
  	if(!this.gameOn){
			this.gameOn = true;
			this.run();
			return;
  	}

    else if(this.gameOver && keycode === replayCode && this.unlocked){
      this.unlocked = false;
      setTimeout(this.unlock(), 1000);
      this.gameOver = false;
      this.start();
      this.run();
			return;
    }


  	else{

      if(keycode === pacmanCode){
        this.pacAuto = !this.pacAuto;
        return;
      }
  		//pause game
  		if(keycode === pauseCode && !this.gamePaused){
  			clearInterval(this.interval);
  			this.gamePaused = true;
  			return;
  		}

  		//resume game
  		if(keycode === continueCode && this.gamePaused){
  			this.interval = setInterval(this.updateCanvas.bind(this,
          () => clearInterval(this.interval)), 150);
  			this.gamePaused = false;
  			return;
  		}


  		switch(keycode){
  			case upCode:
  			this.blinky.nextDir = this.blinky.dir==="UP" ? undefined: "UP";
  			break;

  			case rightCode:
  			this.blinky.nextDir = this.blinky.dir==="RIGHT"? undefined : "RIGHT";
  			break;

  			case leftCode:
  			this.blinky.nextDir = this.blinky.dir === "LEFT"? undefined : "LEFT";
  			break;

  			case downCode:
  			this.blinky.nextDir = this.blinky.dir === "DOWN"? undefined : "DOWN";
  			break;

  			default:
  			break;

  		}
  		switch(keycode){
  			case wCode:
  			this.pacman.nextDir = this.pacman.dir==="UP" ? undefined: "UP";
  			break;

  			case dCode:
  			this.pacman.nextDir = this.pacman.dir==="RIGHT"? undefined : "RIGHT";
  			break;

  			case aCode:
  			this.pacman.nextDir = this.pacman.dir === "LEFT"? undefined : "LEFT";
  			break;

  			case sCode:
  			this.pacman.nextDir = this.pacman.dir === "DOWN"? undefined : "DOWN";
  			break;

  			default:
  			break;

  		}
  	}
  }

  run(){
    this.interval = setInterval(
      this.updateCanvas.bind(this, () => clearInterval(this.interval)), 150);
  }


  start(){
    this.pacman.board.pellets = 0;
    this.board.initMap();
    this.blinky.x = 285;
    this.blinky.y = 315;
    this.pacman.x = 285;
    this.pacman.y = 375;
    this.blinky.dir = "UP";
    this.pacman.dir = "RIGHT";
    this.pacman.draw();
    this.blinky.draw();
  }
}

module.exports = Game;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

const Character = __webpack_require__(2);

class Ghost extends Character {
  constructor(x, y, direction, board, color){
    super();
    this.x = x;
    this.y = y;
    this.dir = direction;
    this.nextDir = undefined;
    this.radius = 9;
    this.maze = board.maze;
    this.ctx = board.ctx;
    this.color = color;
    this.isMoving = false;
    this.isWeak = false;
    this.isDead = false;
  }

  draw(){
    if(!this.isDead){
  		if(this.isWeak){
  				this.ctx.fillStyle = "blue";
  		}
  		else{
  			this.ctx.fillStyle = this.color;
  		}

  		this.ctx.beginPath();

  		this.ctx.arc(this.x, this.y, this.radius, Math.PI, 0, false);
  		this.ctx.moveTo(this.x-this.radius, this.y);


  		// LEGS
  		if (!this.isMoving){
  			this.ctx.lineTo(this.x-this.radius, this.y+this.radius);
  			this.ctx.lineTo(this.x-this.radius+this.radius/3, this.y+this.radius-this.radius/4);
  			this.ctx.lineTo(this.x-this.radius+this.radius/3*2, this.y+this.radius);
  			this.ctx.lineTo(this.x, this.y+this.radius-this.radius/4);
  			this.ctx.lineTo(this.x+this.radius/3, this.y+this.radius);
  			this.ctx.lineTo(this.x+this.radius/3*2, this.y+this.radius-this.radius/4);

  			this.ctx.lineTo(this.x+this.radius, this.y+this.radius);
  			this.ctx.lineTo(this.x+this.radius, this.y);
  		}
  		else {
  			this.ctx.lineTo(this.x-this.radius, this.y+this.radius-this.radius/4);
  			this.ctx.lineTo(this.x-this.radius+this.radius/3, this.y+this.radius);
  			this.ctx.lineTo(this.x-this.radius+this.radius/3*2, this.y+this.radius-this.radius/4);
  			this.ctx.lineTo(this.x, this.y+this.radius);
  			this.ctx.lineTo(this.x+this.radius/3, this.y+this.radius-this.radius/4);
  			this.ctx.lineTo(this.x+this.radius/3*2, this.y+this.radius);
  			this.ctx.lineTo(this.x+this.radius, this.y+this.radius-this.radius/4);
  			this.ctx.lineTo(this.x+this.radius, this.y);
  		}


  		this.ctx.fill();
  	}


  	if(this.isWeak){

  		if(this.isBlinking){
  			this.ctx.fillStyle = "#f00";
  			this.ctx.strokeStyle = "f00";
  		}
  		else{
  			this.ctx.fillStyle = "white";
  			this.ctx.strokeStyle = "white";
  		}

  		//eyes
  		this.ctx.beginPath();//left eye
  		this.ctx.arc(this.x-this.radius/2.5, this.y-this.radius/5, this.radius/5, 0, Math.PI*2, true); // white
  		this.ctx.fill();

  		this.ctx.beginPath(); // right eye
  		this.ctx.arc(this.x+this.radius/2.5, this.y-this.radius/5, this.radius/5, 0, Math.PI*2, true); // white
  		this.ctx.fill();

  		//mouth
  		this.ctx.beginPath();
  		this.ctx.lineWidth=1;
  		this.ctx.moveTo(this.x-this.radius+this.radius/5, this.y+this.radius/2);
  		this.ctx.lineTo(this.x-this.radius+this.radius/3, this.y+this.radius/4);
  		this.ctx.lineTo(this.x-this.radius+this.radius/3*2, this.y+this.radius/2);
  		this.ctx.lineTo(this.x, this.y+this.radius/4);
  		this.ctx.lineTo(this.x+this.radius/3, this.y+this.radius/2);
  		this.ctx.lineTo(this.x+this.radius/3*2, this.y+this.radius/4);
  		this.ctx.lineTo(this.x+this.radius-this.radius/5, this.y+this.radius/2);
  		this.ctx.stroke();
  	}
  	else{
  		// EYES
  		this.ctx.fillStyle = "white"; //left eye
  		this.ctx.beginPath();
  		this.ctx.arc(this.x-this.radius/2.5, this.y-this.radius/5, this.radius/3, 0, Math.PI*2, true); // white
  		this.ctx.fill();

  		this.ctx.fillStyle = "white"; //right eye
  		this.ctx.beginPath();
  		this.ctx.arc(this.x+this.radius/2.5, this.y-this.radius/5, this.radius/3, 0, Math.PI*2, true); // white
  		this.ctx.fill();

  	}
  }

  move() {
    if(this.onBlockCenter(this.x, this.y) === false){
  		if(this.nextDir !== undefined &&  (
  			(this.dir === "UP" && this.nextDir === "DOWN" )||
  			(this.dir === "DOWN" && this.nextDir === "UP") ||
  			(this.dir === "LEFT" && this.nextDir === "RIGHT") ||
   			(this.dir === "RIGHT" && this.nextDir === "LEFT")
  			))
  		{
  			this.dir = this.nextDir;
  			this.nextDir = undefined;
  		}

  		this.moveOneStep();
  		return;
  	}
  	else{
  		if(this.nextDir !== undefined && this.canMove(this.x, this.y, this.nextDir, this.maze)){
  			this.dir = this.nextDir;
  			this.nextDir = undefined;
  			this.moveOneStep();
  		}
  		else{
  			if(this.canMove(this.x, this.y, this.dir, this.maze)){
  				this.moveOneStep();
  			}
      }
    }
  }

  moveOneStep() {
    let newX =0;
  	let newY =0;
  	if(!this.canMove(this.x, this.y, this.dir, this.maze)){
  		return;
  	}
  	switch(this.dir){
  		case "UP":
  		newY = this.y  - 15;
  		if(newY - this.radius - 30 > 0){
  			this.y = newY;
  		}
  		break;

  		case "DOWN":
  		newY = this.y + 15;
  		if(newY + this.radius + 30 < 660) {
  			this.y = newY;
  		}
  		break;


  		case "LEFT":
  		newX = this.x - 15;
  		if(newX - this.radius - 30 > 0 ){
  			this.x = newX;
  		}
  		break;

  		case "RIGHT":
  		newX = this.x + 15;

  		if(newX + this.radius + 30 < 570){
  			this.x = newX;
  		}
  		break;

  		default:
  		break;
    }


  }
}
module.exports = Ghost;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

const Board = __webpack_require__(0);
const Pacman = __webpack_require__(1);
const Game = __webpack_require__(3);

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
});


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map