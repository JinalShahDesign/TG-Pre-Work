const robot = {
  _energyLevel: 100,
  recharge(){
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
  }
};

robot._energyLevel = 'high';
robot.recharge();

/*Privacy in objects refers to the idea that only certain properties should be mutable or able to change in value.
JS does not have privacy built in privacy. A common convention to indicate privacy is to use the underscore before the name a property that should not be altered. */
