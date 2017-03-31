const Character = require('./character');

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
  		if(newY - this.radius - 30 > 0){
  			this.y = newY;
  			this.mouthOpen = ! this.mouthOpen;
  		}
  		break;

  		case "DOWN":
  		newY = this.y + 15;
  		if(newY + this.radius + 30 < 660) {
  			this.y = newY;
  			this.mouthOpen = ! this.mouthOpen;

  		}
  		break;


  		case "LEFT":
  		newX = this.x - 15;
  		if(newX - this.radius - 30 > 0 ){
  			this.x = newX;
  			this.mouthOpen = ! this.mouthOpen;
  		}
  		break;

  		case "RIGHT":
  		newX = this.x + 15;

  		if(newX + this.radius + 30 < 570){
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
