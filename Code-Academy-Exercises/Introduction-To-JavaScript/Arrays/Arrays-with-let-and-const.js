let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = 'Mayo';

console.log(condiments);

condiments = ['Mayo'];

utensils[3] = 'Spoon';

console.log(utensils);

// utensils = ['Spork'];

/*Variables declared with let can be reassigned but variables declared with const cannot be reassigned.
However, you can const is mutable. You can change th econtents but can't reassign a new array or a different value.*/
