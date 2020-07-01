/* eslint no-undef: 0 */
/* eslint-disable no-unused-vars */
let batImg;
let ghostImg;
let wallImg;
let wall;
let bat;

let x = 50;
let y = 50;
let ticker = 10;
let currrentDirection = "RIGHT";

function preload() {
  batImg = loadImage("assests/bat.png");
  ghostImg = loadImage("assests/ghost.png");
  wallImg = loadImage("/assests/spr_wood_texture_0.png");
}

function setup() {
  createCanvas(800, 791);
  wall = new Wall(wallImg, 800, 791);
  wall.wallDraw([0, 0], [800, 0], (type = "H"), true);

  wall.wallDraw([0, 0], [0, 791], (type = "V"), true);

  wall.wallDraw(
    [0, 791 - wallImg.height],
    [800, 791 - wallImg.height],
    (type = "H"),
    true
  );

  wall.wallDraw(
    [800 - wallImg.width, 0],
    [800 - wallImg.width, 250],
    (type = "V"),
    true
  );
  wall.wallDraw(
    [800 - wallImg.width, 300],
    [800 - wallImg.width, 791],
    (type = "V"),
    true
  );
  wall.wallDraw([500, 300], [500, 600], (type = "V"), true);
  wall.wallDraw([300, 50], [300, 450], (type = "V"), true);
  wall.wallDraw([300, 500], [300, 700], (type = "V"), true);

  bat = new Bat(batImg, 800, 791, wall.wallArea, 50);
}

function draw() {
  background(0);

  bat.drawBat(x, y);

  if (ticker === 20) {
    if (bat.dna.length !== 0) {
      currrentDirection = bat.dna.shift();
    } else {
      currrentDirection = "STOP";
    }
    ticker = 0;
  }
  if (ticker % 1 === 0) {
    if (currrentDirection === "RIGHT") {
      [x, y] = bat.batMovement(x + bat.batWidth, y, currrentDirection);
      x -= bat.batWidth;
    } else if (currrentDirection === "DOWN") {
      [x, y] = bat.batMovement(x, y + bat.batHeight, currrentDirection);
      y -= bat.batHeight;
    } else if (currrentDirection !== "STOP") {
      [x, y] = bat.batMovement(x, y, currrentDirection);
    } else {
      // console.log(bat.fitness(790, 275));
    }
  }

  ticker++;

  wall.wallDraw([0, 0], [800, 0], (type = "H"));

  wall.wallDraw([0, 0], [0, 791], (type = "V"));

  wall.wallDraw(
    [0, 791 - wallImg.height],
    [800, 791 - wallImg.height],
    (type = "H")
  );

  wall.wallDraw(
    [800 - wallImg.width, 0],
    [800 - wallImg.width, 250],
    (type = "V")
  );
  wall.wallDraw(
    [800 - wallImg.width, 300],
    [800 - wallImg.width, 791],
    (type = "V")
  );

  wall.wallDraw([500, 300], [500, 600], (type = "V"), true);
  wall.wallDraw([300, 50], [300, 450], (type = "V"), true);
  wall.wallDraw([300, 500], [300, 700], (type = "V"), true);
}
