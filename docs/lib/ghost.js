const Character = require('./character');

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
