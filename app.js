const validator = require('validator');
const chalk = require('chalk');
const notes = require('./notes');

console.log(validator.isEmail('katgmail.com'));
console.log(chalk.green.bold.bgRed('Success!'));
