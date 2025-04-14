const EventEmitter = require('events');
const eventEmitter = new EventEmitter(); // Create an instance of EventEmitter
const serverEmitter = new EventEmitter(); // Create another instance of EventEmitter 

// Practice 1
// eventEmitter.on('greet', (name) => {
//     console.log(`Hello, ${name}!!!`)
// });

// eventEmitter.emit('greet', 'Lokesh'); // Emit the 'greet' event with the name 'Lokesh'


// Practice 2
// serverEmitter.on('start', () => {   
//     console.log('Server started...');
// });

// serverEmitter.on('stop', () => {
//     console.log('Server stopped...');
// });

// serverEmitter.emit('start'); // Emit the 'start' event

// setTimeout(() => {
//     serverEmitter.emit('stop'); // Emit the 'stop' event after 5 seconds
// }, 3000);


// // // Practice 3
// Listen every time
eventEmitter.on('greet', () => {
  console.log('👋 Hello from ON');
});

// Listen only once
eventEmitter.once('greet', () => {
  console.log('👋 Hello from ONCE');
});

// Emit event 3 times
eventEmitter.emit('greet');
eventEmitter.emit('greet');
eventEmitter.emit('greet');
