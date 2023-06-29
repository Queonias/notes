const Notes = require('../models/Note');
const notesCtrl = {}

notesCtrl.renderNoteForm = (_req, res) => {
    res.render('notes/new-note');   
}

notesCtrl.createNewNote = async (req, res) => {
    const { title, description} = req.body;
    const newNote = new Notes({ title, description })
    await newNote.save();
    res.send('new note')   
}

notesCtrl.renderNotes = async (_req, res) => {
    const notes = await Notes.find();
    res.render('notes/all-notes', { notes }); 
}

notesCtrl.renderEditForm = (_req, res) => {
    res.send('render edit form');   
}

notesCtrl.updateNote = (_req, res) => {
    res.send('update note');   
}

notesCtrl.deleteNote = (_req, res) => {
    res.send('deleting note');   
}

module.exports = notesCtrl;