console.log('First message!');
setTimeout(() => {
   console.log('This message will always run last...');
}, 0);
console.log('Second message!');

/*JS is an asynchronous language.JS uses an event loop to handle asynchronous function calls. When a program is run, function calls are made and added to a stack.*/
