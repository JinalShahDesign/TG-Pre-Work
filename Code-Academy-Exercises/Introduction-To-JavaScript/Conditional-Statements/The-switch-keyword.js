let athleteFinalPosition = 'first place';

switch(athleteFinalPosition){
  case 'first place':
    console.log('You get the gold medal!');
    break;
  case 'second place':
    console.log('You get the silver medal!');
    break;
  case 'third place':
    console.log('You get the bronze medal!');
    break;
  default:
    console.log('No medal awarded.');
    break;
}

//The switch statement provides and alternative syntax that's easier to read. The switch keyword intiates the statement followed by ( ) which contains a value that each case will compare. All the case statements are enclosed in { }. The break keyword tells the computer to exit the block and not execute any more code. Without the break keyword the program would execute the code for all matching cases and default code as well. At the end there is a default statement which executes if none of the caes are true. 
