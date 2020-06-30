/* eslint no-undef: 0 */
/* eslint-disable no-unused-vars */

function Wall(wallImg, windowWidth, windowHeight) {
  this.wallImg = wallImg;
  this.windowWidth = windowWidth;
  this.windowHeight = windowHeight;
  this.wallWidht = wallImg.width;
  this.wallHeight = wallImg.height;
  this.wallArea = {};

  let rectCounter = 0;

  this.wallDraw = function (
    startingLocation,
    endingLocation,
    type = "H",
    createArea = false
  ) {
    let [startX, startY] = startingLocation;
    let [endX, endY] = endingLocation;

    if (type === "H") {
      while (startX < endX) {
        image(this.wallImg, startX, startY);
        startX += this.wallWidht;
      }
      if (createArea) {
        let [startX, startY] = startingLocation;
        let [endX, endY] = endingLocation;
        this.wallArea[`reactangle${rectCounter}`] = {
          length: [startX, endX],
          breadth: [startY, endY + this.wallHeight],
          type: type,
        };
        rectCounter++;
      }
    }
    if (type === "V") {
      while (startY < endY) {
        image(this.wallImg, startX, startY);
        startY += this.wallWidht;
      }
      if (createArea) {
        let [startX, startY] = startingLocation;
        let [endX, endY] = endingLocation;
        this.wallArea[`reactangle${rectCounter}`] = {
          length: [startX, endX + this.wallWidht],
          breadth: [startY, endY],
          type: type,
        };
        rectCounter++;
      }
    }
  };
}
