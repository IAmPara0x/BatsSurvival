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
      let probSumExp = 0;
      let childrenBats = [];
      this.deadPopulation.forEach((bat) => {
        bat.selectionPobability = exp(-bat.selectionPobability);
        probSumExp += bat.selectionPobability;
      });
      this.deadPopulation.forEach((bat) => {
        bat.selectionPobability = +(
          bat.selectionPobability / probSumExp
        ).toFixed(2);
      });
      this.deadPopulation.forEach((bat) => {
        let numBats = bat.selectionPobability * 100;
        while (numBats > 0) {
          tempBats.push(bat);
          numBats--;
        }
      });
      console.log(tempBats.length);
      for (let i = 0; i < this.populationSize; i++) {
        let parent1 = tempBats[Math.floor(Math.random() * tempBats.length)];
        let parent2 = tempBats[Math.floor(Math.random() * tempBats.length)];

        let children = new Bat(batImg, 50, 350, wall.wallArea, 100, true);
        children.dna = [].concat(
          parent1.dna.slice(0, 51),
          parent2.dna.slice(51)
        );
        childrenBats.push(children);
      }
      this.population = childrenBats;
      this.deadPopulation = [];
      tempBats = [];
    } else {
      for (let i = 0; i < this.populationSize; i++) {
        this.population.push(new Bat(batImg, 50, 350, wall.wallArea, 100));
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
      ticker = 0;
    }
  }
}
