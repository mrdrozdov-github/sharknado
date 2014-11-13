
var program = require('commander');
var pkg = require('./package.json');

program
	.version(pkg.version);

program.parse(process.argv);

/***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** ***** *****/

var inquirer = require('inquirer');
var fs = require('fs');
var path = require('path');
var sharks = fs.readFileSync(path.resolve('./sharks.txt'), 'utf8').split('@@@@@@@@@@');

function youLose() {
	var min = 0;
	var max = sharks.length - 1;
	var r = Math.floor(Math.random() * (max - min + 1)) + min;
	console.log('You lose.');
	console.log(sharks[r]);
	console.log('source: http://www.ascii-art.de/ascii/s/sharks.txt');
}

inquirer.prompt({
	type: 'list',
	name: 'woc',
	message: 'A tornado of sharks is coming at you. What is your weapon of choice?',
	choices: [
		'Chainsaw',
		'Lasers',
		'Gluten'
	]
}, function (answers) {
	switch (answers['woc']) {
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
