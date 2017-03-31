const Block = require("./board");

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
