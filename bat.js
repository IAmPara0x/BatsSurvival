/* eslint no-undef: 0 */
/* eslint-disable no-unused-vars */
function Bat(batImg, windowWidth, windowHeight, wallArea) {
  this.batImg = batImg;
  this.batWidth = batImg.width;
  this.batHeight = batImg.height;
  this.windowWidth = windowWidth;
  this.windowHeight = windowHeight;
  this.wallArea = wallArea;
  this.direction = ["UP", "DOWN", "RIGHT", "LEFT"];

  this.drawBat = function (x, y) {
    image(this.batImg, x, y);
  };

  this.batDirection = function () {
    let Currentdirection = this.direction[
      Math.floor(Math.random() * this.direction.length)
    ];
    return Currentdirection;
  };

  this.batMovement = function (x, y, direction) {
    var rectangles = Object.keys(this.wallArea);
    var isMovementAllowed = true;

    rectangles.forEach((rectangle) => {
      var rect = this.wallArea[rectangle];
      if (rect.length[0] <= x && x <= rect.length[1]) {
        if (rect.breadth[0] <= y && y <= rect.breadth[1]) {
          console.log("wall");
          isMovementAllowed = false;
        }
      }
    });
    if (isMovementAllowed) {
      if (direction === "UP") {
        return [x, y - 1];
      }
      if (direction === "DOWN") {
        return [x, y + 1];
      }
      if (direction === "RIGHT") {
        return [x + 1, y];
      }
      if (direction === "LEFT") {
        return [x - 1, y];
      }
    } else {
      return [x, y];
    }
  };
}
