/* eslint no-undef: 0 */
/* eslint-disable no-unused-vars */
function Bat(
  batImg,
  initialX,
  initialY,
  windowWidth,
  windowHeight,
  wallArea,
  dnaLength
) {
  this.batImg = batImg;
  this.batWidth = batImg.width;
  this.batHeight = batImg.height;
  this.windowWidth = windowWidth;
  this.windowHeight = windowHeight;
  this.wallArea = wallArea;
  this.directionOptions = ["UP", "DOWN", "RIGHT", "LEFT"];
  this.dnaLength = dnaLength;
  this.dna = [];
  (this.x = initialX), (this.y = initialY);
  this.direction = "RIGHT";

  this.drawBat = function () {
    image(this.batImg, this.x, this.y);
  };

  this.batDirection = function () {
    let Currentdirection = this.directionOptions[
      Math.floor(Math.random() * this.directionOptions.length)
    ];
    return Currentdirection;
  };

  for (let i = 0; i < this.dnaLength; i++) {
    this.dna.push(this.batDirection());
  }

  this.batMovement = function () {
    if (this.direction === "STOP") {
      // console.log("I AM DYING");
    }

    if (this.direction === "RIGHT") {
      this.x += this.batWidth;
    }
    if (this.direction === "DOWN") {
      this.y -= bat.batHeight;
    }

    var rectangles = Object.keys(this.wallArea);
    var isMovementAllowed = true;

    rectangles.forEach((rectangle) => {
      var rect = this.wallArea[rectangle];
      if (rect.length[0] <= this.x && this.x <= rect.length[1]) {
        if (rect.breadth[0] <= this.y && this.y <= rect.breadth[1]) {
          isMovementAllowed = false;
        }
      }
    });
    if (isMovementAllowed) {
      if (this.direction === "UP") {
        this.y -= 4;
      }
      if (this.direction === "DOWN") {
        this.y += 4;
        this.y += this.batHeight;
      }
      if (this.direction === "RIGHT") {
        this.x += 4;
        this.x -= this.batWidth;
      }
      if (this.direction === "LEFT") {
        this.x -= 4;
      }
    }
    if (!isMovementAllowed && this.direction === "RIGHT") {
      this.x -= this.batWidth;
    }
    if (!isMovementAllowed && this.direction === "DOWN") {
      this.y += this.batHeight;
    }
  };

  this.fitness = function (goalX, goalY) {
    var dist = Math.sqrt((goalX - this.x) ** 2 + (goalY - this.y) ** 2);
    return dist;
  };
}
