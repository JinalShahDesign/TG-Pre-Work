const satellite = 'The Moon';
const galaxy = 'The Milky Way';
let stars = 'North Star';

const callMyNightSky = () => {
  stars = 'Sirius';
	return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(callMyNightSky());
console.log(stars);

//Having too many global variables can cause problems. When you declare a variable they go to the global namespace. These variables remain there until the program finishes which means the global namespace can fill up really quickly. Scope pollution is when you have too many global variables that exist in the global namespace. Scope pollution makes variables hard to track and sets us up for potential accident.s
