/* eslint no-undef: 0 */
/* eslint-disable no-unused-vars */
let batImg;
let ghostImg;
let wallImg;
let wall;
let geneticAlgo;
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
  geneticAlgo = new GeneticAlgo(100);
  geneticAlgo.createPopulation((reproduce = false));
}

function draw() {
  background(0);

  geneticAlgo.populationMovement();
  if (geneticAlgo.population.length === 0) {
    geneticAlgo.createPopulation((reproduce = true));
  }

  ticker++;
  wall.drawAllWalls((createArea = false));
}
