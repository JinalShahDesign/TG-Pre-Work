let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  'Active Mission' : true,
  homePlanet : 'Earth',
  numCrew: 5
 };

let propName =  'Active Mission';

// Write your code below

let isActive = spaceship['Active Mission'];

console.log(spaceship[propName]);

/*Another way to access a key's value by using the bracket notation [ ] Pass the property name as a string within [ ]. We must use bracket notation when accessing keys that have numbers, spaces, or special characters in them.*/
