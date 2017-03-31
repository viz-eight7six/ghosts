const Board = require("./board");
const Pacman = require("./pacman");
const Ghost = require("./ghost");

class Game {
  constructor(ctx){
    this.board = new Board(ctx);
    this.pacman = new Pacman(285, 375, "RIGHT", this.board);
    this.blinky = new Ghost(285, 315, "UP", this.board, "red");
    this.gamePaused = false;
    this.gameOn = false;
    this.gameOver = false;
    this.interval = 0;
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
      }, 1000);
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
        this.ctx.strokeStyle = "green";
        this.ctx.lineWidth=5;
        this.ctx.fillRect(570/2-150, 660/2-40, 300, 100);
        this.ctx.strokeRect(570/2-150, 660/2-40, 300, 100);

        //write message
        this.ctx.textAlign="center";
        this.ctx.fillStyle = "white";
        this.ctx.font = "16px monospace";
        this.ctx.fillText("Congratulations, you won!", 570/2, 660/2+6);
        this.ctx.font = "12px monospace";
        this.ctx.fillText("press R to play again", 570/2, 660/2+28);
      }
      else{
        this.gameOver = true;
        func();
        this.ctx.fillStyle = "black";
        this.ctx.strokeStyle = "green";
        this.ctx.lineWidth=5;
        this.ctx.fillRect(570/2-150, 660/2-40, 300, 100);
        this.ctx.strokeRect(570/2-150, 660/2-40, 300, 100);

        //write message
        this.ctx.textAlign="center";
        this.ctx.fillStyle = "white";
        this.ctx.font = "16px monospace";
        this.ctx.fillText("You Lose!", 570/2, 660/2+6);
        this.ctx.font = "12px monospace";
        this.ctx.fillText("press R to play again", 570/2, 660/2+28);
      }
    }
    if(this.board.pellets === 0){
      this.gameOver = true;
      func();
      this.ctx.fillStyle = "black";
      this.ctx.strokeStyle = "green";
      this.ctx.lineWidth=5;
      this.ctx.fillRect(570/2-150, 660/2-40, 300, 100);
      this.ctx.strokeRect(570/2-150, 660/2-40, 300, 100);

      //write message
      this.ctx.textAlign="center";
      this.ctx.fillStyle = "white";
      this.ctx.font = "16px monospace";
      this.ctx.fillText("You Lose!", 570/2, 660/2+6);
      this.ctx.font = "12px monospace";
      this.ctx.fillText("press R to play again", 570/2, 660/2+28);
    }
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

    else if(this.gameOver && keycode === replayCode){
      this.gameOver = false;
      this.start();
      this.run();
			return;
    }


  	else{

      if(keycode === pacmanCode){
        this.pacAuto = false;
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


  		//4-way controls
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
  		//4-way controls
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
