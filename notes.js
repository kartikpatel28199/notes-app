const fs = require('fs');
const chalk = require('chalk');

// Get note
const getNotes = (title) => {
  const notes = loadNotes();
  const noteFound = notes.find((note) => note.title === title);

  if (noteFound) {
    console.log(
      chalk.bold('Title: ' + noteFound.title) + ' Body: ',
      noteFound.body,
    );
  } else {
    console.log(chalk.red.inverse('No note found!'));
  }
};

// Add note
const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
    notes.push({ title: title, body: body });
    saveNotes(notes);
    console.log(chalk.green.inverse('New note added'));
  } else {
    console.log(chalk.red.inverse('Note title already exist'));
  }
};

// Remove note
const removeNote = (title) => {
  const notes = loadNotes();
  const modifiedNotes = notes.filter((note) => {
    return note.title !== title;
  });

  if (modifiedNotes.length != notes.length) {
    saveNotes(modifiedNotes);
    console.log(chalk.green.inverse('Remove Note ' + title));
  } else {
    console.log(chalk.red.inverse('No such note found'));
  }
};

// List notes
const listNotes = () => {
  console.log(chalk.inverse('Your Notes'));
  const notes = loadNotes();
  notes.forEach((note) => console.log(note.title));
};

// Save note
const saveNotes = (notes) => {
  const storeData = JSON.stringify(notes);
  fs.writeFileSync('notes.json', storeData);
};

// Load notes
const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote,
  listNotes,
};
