/* eslint no-undef: 0 */
/* eslint-disable no-unused-vars */
let batImg;
let ghostImg;
let wallImg;
let wall;
let bat;
let goalX = 790,
  goalY = 275;

let ticker = 10;

function preload() {
  batImg = loadImage("assests/bat.png");
  ghostImg = loadImage("assests/ghost.png");
  wallImg = loadImage("/assests/spr_wood_texture_0.png");
}

function setup() {
  createCanvas(800, 791);
  wall = new Wall(wallImg, 800, 791);
  wall.drawAllWalls((createArea = true));
  bat = new Bat(batImg, 50, 50, 800, 791, wall.wallArea, 50);
}

function draw() {
  background(0);

  bat.drawBat(bat.x, bat.y);

  if (ticker === 20) {
    if (bat.dna.length !== 0) {
      bat.direction = bat.dna.shift();
    } else {
      bat.direction = "STOP";
      dist = bat.fitness(goalX, goalY);
      console.log(dist);
    }
    ticker = 0;
  }
  if (ticker % 1 === 0) {
    bat.batMovement();
  }

  ticker++;
  wall.drawAllWalls((createArea = false));
}
