// Write your code below
const bobsFollowers = ['Greg', 'Mark', 'Lily', 'Tara'];
const tinasFollowers = ['Greg', 'Mark', 'Scott'];
const mutualFollowers= [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
};

/*A loop inside another loop is called a nested loop. One use for a nested for loop is to compare the elements in two arrays.*/
