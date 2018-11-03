class Surgeon {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }
}

const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');
const surgeonDurant = new Surgeon('Durant', 'Orthopedics');

/*An instance is an object that contains property names and methos of a class, but with unique property values.
You can use the new keyword to generate a new instance.*/
