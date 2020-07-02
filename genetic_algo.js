/* eslint no-undef: 0 */
/* eslint-disable no-unused-vars */

class GeneticAlgo {
  constructor(populationSize) {
    this.populationSize = populationSize;
    this.population = [];
    this.deadPopulation = [];
  }
  createPopulation() {
    for (let i = 0; i < this.populationSize; i++) {
      this.population.push(new Bat(batImg, 50, 350, wall.wallArea, 100));
    }
  }

  populationMovement() {
    this.population.forEach((bat, index, object) => {
      bat.drawBat(bat.x, bat.y);

      if (ticker === 10) {
        if (bat.dna.length !== 0) {
          bat.direction = bat.dna.shift();
          bat.fitness(goalX, goalY);
        } else {
          bat.killed = true;
        }
      }
      if (ticker % 1 === 0) {
        bat.batCheckValidMove();
        if (bat.killed) {
          console.log(bat.bestFitness);
          this.deadPopulation.push(object[index]);
          console.log(this.deadPopulation);
          object.splice(index, 1);
          explosionImages.forEach((explosionImage) => {
            image(explosionImage, bat.x, bat.y);
          });
        }
      }
    });
    if (ticker === 10) {
      ticker = 0;
    }
  }
}
