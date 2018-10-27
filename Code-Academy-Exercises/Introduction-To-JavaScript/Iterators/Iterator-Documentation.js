const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below

console.log(words.some(word => {
  return word.length < 6;
}));

// Use filter to create a new array
const interestingWords = words.filter((word) => {return word.length > 5});


// Make sure to uncomment the code below and fix the incorrect code before running it

console.log(interestingWords.every((word) => {return word.length > 5}));

/*There is documentation for each method and it containes a short definition, a block with the correct syntax for that method, a list of parameters the method accepts or requires, the return value of the function, an extended description, examples of the method's use, and other additional information.*/
