const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below
let currentCard;

while ( currentCard != 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
	console.log(currentCard);
}

/*The while loop is good for situations where you want a loop to execute an undetermined number of times.*/
