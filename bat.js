/* eslint no-undef: 0 */
/* eslint-disable no-unused-vars */
function Bat(batImg, windowWidth, windowHeight, wallArea) {
  this.batImg = batImg;
  this.windowWidth = windowWidth;
  this.windowHeight = windowHeight;
  this.wallArea = wallArea;
  this.direction = ["UP", "DOWN", "RIGHT", "LEFT"];

  this.drawBat = function (X, Y) {
    image(this.batImg, X, Y);
  };

  this.batDirection = function () {
    let Currentdirection = this.direction[
      Math.floor(Math.random() * this.direction.length)
    ];
    return Currentdirection;
  };

  this.batMovement = function (x, y, direction) {
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
  };
}
