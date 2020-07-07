/* eslint no-undef: 0 */
/* eslint-disable no-unused-vars */
class Ghost {
	constructor(
		ghostImg,
		initialX,
		initialY,
		wallArea,
		dnaLength,
		isChildren = false
	) {
		this.ghostImg = ghostImg;
		this.x = initialX;
		this.y = initialY;
		this.wallArea = wallArea;
		this.dnaLength = dnaLength;
		this.isChildren = isChildren;
		this.possibleDirections = ["UP", "DOWN"];
		this.dna = [];
		this.direction = "UP";
		this.ghostHeight = ghostImg.height;
		this.ghostWidth = ghostImg.width;
		this.currentDnaPos = 0;
		this.killed = false;
		if (!this.isChildren) {
			for (let i = 0; i < this.dnaLength; i++) {
				this.dna.push(
					this.possibleDirections[
						Math.floor(Math.random() * this.possibleDirections.length)
					]
				);
			}
		}
		// console.log(this.dna.length);
	}
	draw() {
		image(this.ghostImg, this.x, this.y);
	}

	ghostCheckValidMove() {
		if (this.direction === "DOWN") {
			this.y += this.ghostHeight;
		}
		let rectangles = Object.keys(this.wallArea);
		let isMovementAllowed = true;

		rectangles.forEach((rectangle) => {
			let rect = this.wallArea[rectangle];
			if (rect.length[0] <= this.x && this.x <= rect.length[1]) {
				if (rect.breadth[0] <= this.y && this.y <= rect.breadth[1]) {
					isMovementAllowed = false;
					// console.log(isMovementAllowed);
				}
			}
		});
		if (isMovementAllowed) {
			if (this.direction === "UP") {
				this.y -= 4;
			}
			if (this.direction === "DOWN") {
				this.y += 4;
				this.y -= this.ghostHeight;
			}
		}
		if (!isMovementAllowed && this.direction === "DOWN") {
			this.y -= this.ghostHeight;
		}
	}
}
