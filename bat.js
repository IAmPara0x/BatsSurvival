/* eslint no-undef: 0 */
/* eslint-disable no-unused-vars */
function Bat(batImg, windowWidth, windowHeight, wallArea, dnaLength) {
  this.batImg = batImg;
  this.batWidth = batImg.width;
  this.batHeight = batImg.height;
  this.windowWidth = windowWidth;
  this.windowHeight = windowHeight;
  this.wallArea = wallArea;
  this.direction = ["UP", "DOWN", "RIGHT", "LEFT"];
  this.dnaLength = dnaLength;
  this.dna = [];
  this.x, this.y;

  this.drawBat = function (x, y) {
    image(this.batImg, x, y);
  };

  this.batDirection = function () {
    let Currentdirection = this.direction[
      Math.floor(Math.random() * this.direction.length)
    ];
    return Currentdirection;
  };

  for (let i = 0; i < this.dnaLength; i++) {
    this.dna.push(this.batDirection());
  }

  this.batMovement = function (x, y, direction) {
    var rectangles = Object.keys(this.wallArea);
    var isMovementAllowed = true;

    rectangles.forEach((rectangle) => {
      var rect = this.wallArea[rectangle];
      if (rect.length[0] <= x && x <= rect.length[1]) {
        if (rect.breadth[0] <= y && y <= rect.breadth[1]) {
          isMovementAllowed = false;
        }
      }
    });
    if (isMovementAllowed) {
      if (direction === "UP") {
        this.x = x;
        this.y = y - 4;
        return [x, y - 4];
      }
      if (direction === "DOWN") {
        this.x = x;
        this.y = y + 4;
        return [x, y + 4];
      }
      if (direction === "RIGHT") {
        this.x = x + 4;
        this.y = y;
        return [x + 4, y];
      }
      if (direction === "LEFT") {
        this.x = x - 4;
        this.y = y;
        return [x - 4, y];
      }
    } else {
      this.x = x;
      this.y = y;
      return [x, y];
    }
  };

  this.fitness = function (goalX, goalY) {
    var dist = Math.sqrt((goalX - this.x) ** 2 + (goalY - this.y) ** 2);
    return dist;
  };
}
