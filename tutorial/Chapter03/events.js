const EventEmitter = require('events');
const celebrity = new EventEmitter();

celebrity.on('supporter', () => {
	console.log('Congrats! You are the best.');
});

celebrity.on('critic', () => {
	console.log('Boo!! I could have done better than that.');
});

let mult = -1;
let count = 1;

setInterval(() => {
	if (mult == 1) {
		celebrity.emit('supporter');
	} else if (mult == -1) {
		celebrity.emit('critic');
	}
	if (count > 10) {
		if (mult != 0) {
			console.log('Stop Fighting (Press Ctrl+C to stop the fight)');
		}
		mult = 0;
	}
	mult = mult * -1;
	count = count + 1;
}, 1000);