/* eslint no-undef: 0 */
/* eslint-disable no-unused-vars */

function Wall(wallImg, windowWidth, windowHeight) {
  this.wallImg = wallImg;
  this.windowWidth = windowWidth;
  this.windowHeight = windowHeight;
  this.wallWidht = wallImg.width;
  this.wallHeight = wallImg.height;
  this.wallArea = [];
  // image(this.wallImg, 10, 10);

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
        while (startX <= endX) {
          this.wallArea.push({ X: startX, Y: startY });
          startX++;
        }
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
        while (startY <= endY) {
          this.wallArea.push({ X: startX, Y: startY });
          startY++;
        }
      }
    }
  };
}
