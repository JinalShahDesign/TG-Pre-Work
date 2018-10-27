let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth',
  color: 'silver',
  'Secret Mission' : 'Discover life outside of Earth.'
};

// Write your code below

spaceship.color = 'glorious gold';

spaceship.numEngines = 9;

delete spaceship['Secret Mission'];

/*Objects are mutable, they can be updated after they are created. You can use the . notation, the [] notation or the assignment operator = to add new key-value pairs to an object or change an existing property. If the property already exists the value it held before will be replaced. If there was no property with that name, a new property will be added to the object. You can delete a property from an object with the delete operator.*/
