const plantNeedsWater = function(day) {
  if(day === 'Wednesday'){
    return true;
  } else {
    return false;
  }
};

plantNeedsWater('Tuesday');

console.log(plantNeedsWater('Tuesday'));

//Another way to define a functino is to use a function expression. To define a function inside an expression, use the function keyword. A function expression is often stored in a variable in order to refer to it. It's common practice to use const as the keyword to declare the variable. Function expressions cannot be called before they're defined.
