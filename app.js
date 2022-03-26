const validator = require('validator');
const yargs = require('yargs');
const chalk = require('chalk');

// Create add command
yargs.command({
  command: 'add',
  describe: 'Add a note',
  handler: function () {
    console.log('Adding the note');
  },
});

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  handler: function () {
    console.log('Removing the note');
  },
});

// Create list command
yargs.command({
  command: 'list',
  describe: 'List a note',
  handler: function () {
    console.log('List the note');
  },
});

// Create read command
yargs.command({
  command: 'read',
  describe: 'Read a note',
  handler: function () {
    console.log('Reading the note');
  },
});
