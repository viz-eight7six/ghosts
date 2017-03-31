# Ghosts

Ghosts is a javascript application inspired by Pac-Man.

[Pacman](http://pacman.com/en/)

[Live site: Ghosts](https://viz-eight7six.github.io/ghosts/)

Ghosts utilizes the following:

- Javascript ES6
- jQuery
- Canvas
- CSS

# Features

The application is composed of two primary features:

### Gameplay

The game is played by using the ghost, Blinky, to chase after the Pac-Man. The Pac-Man runs around eating pellets. The game can be paused, resumed, and reloaded when the game is over.

![GameStart](http://res.cloudinary.com/cloud-vinson/image/upload/v1490983377/Screen_Shot_2017-03-31_at_10.47.29_AM_xdx1w8.png)

The game ends when either Blinky or Pac-Man catches each other, or when the Pac-Man eats all the pellets on the board.

![GameWin](http://res.cloudinary.com/cloud-vinson/image/upload/v1490983377/Screen_Shot_2017-03-31_at_10.33.25_AM_xhgytt.png)

![GameLose](http://res.cloudinary.com/cloud-vinson/image/upload/v1490983377/Screen_Shot_2017-03-31_at_10.51.08_AM_c4dzys.png)

The user is allowed to control Pac-Man by turning off the auto-pilot function.

### Audio

A audio clip of a remix with Pac-Man music, PACMAN by MartyParty is played when the site is loaded. Users are able to control the volume, pause the music, and mute the player.

# Design

### Logic

#### Map

The map is made taking an array and drawing each 30 x 30 pixel block based on its type. As the PacMan transverses the map, the map is re-rendered removing the food.

```javascript
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
```

#### Game win

The game is won by checking a if the Blinky and PacMan is at the same location at the same time.

A feature in this game is that there are half steps and the PacMan can dodge Blinky even if they walk through each other. This gives a more interesting effect because the PacMan could jump of sidestep out of the way.

```javascript
if (this.blinky.x === this.pacman.x && this.blinky.y === this.pacman.y)

```

### Wireframes

Early in production, detailed wireframes were produced.

![main page](http://res.cloudinary.com/cloud-vinson/image/upload/v1490983756/pacman-wireframe_pe4zss.jpg)

Changes were made where the game status and directions are placed on the side instead of using Modules

## Future Release
* [ ] Smarter Pac-Man AI
* [ ] Multiple Ghosts
* [ ] Multiple Levels
* [ ] Sound effects based on game actions
* [ ] Style Music Player
