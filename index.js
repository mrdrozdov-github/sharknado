var program = require('commander');
var pkg = require('./package.json');

program
	.version(pkg.version);

program.parse(process.argv);

/***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** *****/

var inquirer = require('inquirer');
var fs = require('fs');
var path = require('path');
var SHARK_FILE = __dirname + '/sharks.txt';

inquirer.prompt({
	type: 'list',
	name: 'weaponOfChoice',
	message: 'A tornado of sharks is coming at you. What is your weapon of choice?',
	choices: [
		'Chainsaw',
		'Lasers',
		'Gluten'
	]
}, function (answers) {
	switch (answers['weaponOfChoice']) {
		case 'Chainsaw':
			youLose();
			break;
		case 'Lasers':
			youLose();
			break;
		case 'Gluten':
			youLose();
			break;
		default:
			youLose();
			break;
	}
});

function youLose() {
	console.log('You lose.');
	console.log(getRandomShark());
	console.log('source: http://www.ascii-art.de/ascii/s/sharks.txt');
}

function getRandomShark() {
	var sharks = fs.readFileSync(SHARK_FILE, 'utf8').split('@@@@@@@@@@');
	var min = 0;
	var max = sharks.length - 1;
	var r = Math.floor(Math.random() * (max - min + 1)) + min;
	return sharks[r];
}
