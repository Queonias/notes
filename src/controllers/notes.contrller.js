const Notes = require('../models/Note');
// const flash = require('connect-flash');
const notesCtrl = {}

notesCtrl.renderNoteForm = (_req, res) => {
    res.render('notes/new-note');   
}

notesCtrl.createNewNote = async (req, res) => {
    const { title, description} = req.body;
    const newNote = new Notes({ title, description });
    await newNote.save();
    req.flash("success_msg", "Note Added Successfully");
    res.redirect('/notes');    
}

notesCtrl.renderNotes = async (_req, res) => {
    const notes = await Notes.find();
    res.render('notes/all-notes', { notes }); 
}

notesCtrl.renderEditForm = async (req, res) => {
    const note = await Notes.findById(req.params.id);
    res.render('notes/edit-note', { note });    
}

notesCtrl.updateNote = async (req, res) => {
    const { title, description } = req.body;
    await Notes.findByIdAndUpdate(req.params.id, { title, description });
    req.flash("success_msg", "Note Updated Successfully");
    res.redirect('/notes');   
}

notesCtrl.deleteNote = async (req, res) => {
    await Notes.findByIdAndDelete(req.params.id);
    req.flash("success_msg", "Note Deleted Successfully");
    res.redirect('/notes'); 
}

module.exports = notesCtrl;