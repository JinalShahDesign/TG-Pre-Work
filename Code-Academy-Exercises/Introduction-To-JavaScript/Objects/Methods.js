let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// Write your code below

let alienShip = {
  retreat() {
    console.log(retreatMessage)
  },
  takeOff() {
    console.log('Spim... Borp... Glix... Blastoff!')
  }
};

alienShip.retreat();

alienShip.takeOff();

/*When data stored on an object is a function we call that a method. A property is what an object has while a method is what an object does. console.log is a method. Math and .floor are also methods. Object methods are invoked by appending the object's name with the dot operator followed by the method name and parantheses. */
