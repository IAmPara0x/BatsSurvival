/* eslint no-undef: 0 */
/* eslint-disable no-unused-vars */

let tempBats = [];
class GeneticAlgo {
	constructor(populationSize) {
		this.populationSize = populationSize;
		this.population = [];
		this.deadPopulation = [];
		this.mutationRate = 0.005;
	}
	createPopulation(reproduce = false) {
		if (reproduce) {
			let tempBats = [];
			let childrenBats = [];
			this.deadPopulation.forEach((bat) => {
				bat.selectionProbability *= bat.survivalProbability;
				bat.selectionProbability = bat.selectionProbability.toFixed(2);
			});

			this.deadPopulation.forEach((bat) => {
				let numBat = bat.selectionProbability * 100;
				while (numBat > 0) {
					tempBats.push(bat);
					numBat--;
				}
			});

			for (let i = 0; i < this.populationSize; i++) {
				let index1 = Math.floor(Math.random() * tempBats.length);
				let index2 = Math.floor(Math.random() * tempBats.length);
				let parent1 = tempBats[index1];
				let parent2 = tempBats[index2];
				while (index1 === index2) {
					index2 = Math.floor(Math.random() * tempBats.length);
					parent2 = tempBats[index2];
				}
				let childBat = new Bat(batImg, 50, 350, wall.wallArea, 150, true);

				if (this.mutationRate >= random(0, 1)) {
					childBat.dna = [].concat(
						parent1.dna.slice(0, 56),
						parent2.dna.slice(76)
					);
					while (childBat.dna.length !== childBat.dnaLength) {
						childBat.dna.push(childBat.batDirection());
					}
				} else {
					childBat.dna = [].concat(
						parent1.dna.slice(0, 76),
						parent2.dna.slice(76)
					);
				}
				childrenBats.push(childBat);
			}
			console.log(childrenBats[0].dna.length);
			this.deadPopulation = [];
			tempBats = [];
			this.population = childrenBats;
			childrenBats = [];
		} else {
			for (let i = 0; i < this.populationSize; i++) {
				this.population.push(new Bat(batImg, 50, 350, wall.wallArea, 150));
			}
		}
	}

	populationMovement() {
		this.population.forEach((bat, index, object) => {
			bat.drawBat(bat.x, bat.y);

			if (ticker === 10) {
				if (bat.currentDnaPos !== bat.dnaLength) {
					bat.direction = bat.dna[bat.currentDnaPos];
					bat.fitness(goalX, goalY);
					bat.currentDnaPos += 1;
				} else {
					bat.killed = true;
					bat.survivalProbability = bat.currentDnaPos / bat.dnaLength;
				}
			}
			if (ticker % 1 === 0) {
				bat.batCheckValidMove();
				if (bat.killed) {
					this.deadPopulation.push(object[index]);
					object.splice(index, 1);
					explosionImages.forEach((explosionImage) => {
						image(explosionImage, bat.x, bat.y);
					});
				}
			}
		});
		if (ticker === 10) {
			if (ghost.currentDnaPos !== ghost.dna.length) {
				ghost.direction = ghost.dna[ghost.currentDnaPos];
				ghost.currentDnaPos += 1;
			} else {
				ghost.killed = true;
			}
		}
		if (ticker % 1 === 0) {
			ghost.ghostCheckValidMove();
			if (ghost.killed) {
				explosionImages.forEach((explosionImage) => {
					image(explosionImage, ghost.x, ghost.y);
				});
			} else {
				ghost.draw();
			}
		}
		if (ticker === 10) {
			ticker = 0;
		}
	}
}
