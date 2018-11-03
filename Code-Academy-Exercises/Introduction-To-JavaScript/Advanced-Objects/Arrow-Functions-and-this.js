const robot = {
  energyLevel: 100,
  checkEnergy() {
    console.log(`Energy is currently at ${this.energyLevel}%.`)
  }
}

robot.checkEnergy();

/*There are issues that occur when you use the arrow function with this keyword. Avoid using arrow functions when using this method.*/
