/* eslint no-undef: 0 */
/* eslint-disable no-unused-vars */
let batImg;
let ghostImg;
let wallImg;
let wall;
let bat;

let x = 700;
let y = 575;
let ticker = 10;
let currrentDirection = "LEFT";

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

  bat = new Bat(batImg, 800, 791, wall.wallArea);
}

function draw() {
  background(0);

  bat.drawBat(x, y);

  if (ticker === 20) {
    currrentDirection = bat.batDirection();
    ticker = 0;
  }
  if (ticker % 1 === 0) {
    if (currrentDirection === "RIGHT") {
      [x, y] = bat.batMovement(x + bat.batWidth, y, currrentDirection);
      x -= bat.batWidth;
    } else if (currrentDirection === "DOWN") {
      [x, y] = bat.batMovement(x, y + bat.batHeight, currrentDirection);
      y -= bat.batHeight;
    } else {
      [x, y] = bat.batMovement(x, y, currrentDirection);
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
