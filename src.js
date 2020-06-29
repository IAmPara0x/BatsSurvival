/* eslint no-undef: 0 */
/* eslint-disable no-unused-vars */
let batImg;
let ghostImg;
let wallImg;
let wall;
let bat;

let x = 100;
let y = 100;
let ticker = 10;
let currrentDirection = "DOWN";

function preload() {
  batImg = loadImage("assests/bat.png");
  ghostImg = loadImage("assests/ghost.png");
  wallImg = loadImage("/assests/spr_wood_texture_0.png");
}

function setup() {
  createCanvas(800, 791);
  wall = new Wall(wallImg, 800, 791);
  wall.wallDraw([0, 0], [800, 100], (type = "H"), true);

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
  // console.log(wall.wallArea.slice(-10));
  bat = new Bat(batImg, 800, 791, wall.wallArea);
}

function draw() {
  background(0);
  image(ghostImg, 150, 150);

  bat.drawBat(x, y);

  if (ticker === 10) {
    currrentDirection = bat.batDirection();
    // console.log(currrentDirection);
    ticker = 0;
  }
  [x, y] = bat.batMovement(x, y, currrentDirection);

  ticker++;

  wall.wallDraw([0, 0], [800, 100], (type = "H"));

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
}
