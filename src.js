/* eslint no-undef: 0 */
/* eslint-disable no-unused-vars */
let batImg;
let ghostImg;
let wallImg;
let wall;
let bats = [];
const goalX = 790,
  goalY = 275;

let ticker = 0;
const population = 50;
const numExplosionImages = 4;
let explosionImages = [];

function preload() {
  batImg = loadImage("assests/bat.png");
  ghostImg = loadImage("assests/ghost.png");
  wallImg = loadImage("/assests/spr_wood_texture_0.png");

  for (let i = 0; i < numExplosionImages; i++) {
    explosionImages.push(loadImage(`/assests/explosion${i + 1}.png`));
  }
}

function setup() {
  createCanvas(800, 791);
  wall = new Wall(wallImg, 800, 791);
  wall.drawAllWalls((createArea = true));
  // bat = new Bat(batImg, 50, 50, 800, 791, wall.wallArea, 50);
  for (let i = 0; i < population; i++) {
    bats.push(new Bat(batImg, 50, 350, 800, 791, wall.wallArea, 100));
  }
}

function draw() {
  background(0);

  bats.forEach((bat, index, object) => {
    bat.drawBat(bat.x, bat.y);

    if (ticker === 10) {
      if (bat.dna.length !== 0) {
        bat.direction = bat.dna.shift();
      } else {
        bat.direction = "STOP";
        dist = bat.fitness(goalX, goalY);
      }
    }
    if (ticker % 1 === 0) {
      bat.batMovement();
      if (bat.killed) {
        object.splice(index, 1);
        explosionImages.forEach((explosionImage) => {
          image(explosionImage, bat.x, bat.y);
        });
      }
    }
  });
  if (ticker === 10) {
    ticker = 0;
  }

  ticker++;
  wall.drawAllWalls((createArea = false));
}
