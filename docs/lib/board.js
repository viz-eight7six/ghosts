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
