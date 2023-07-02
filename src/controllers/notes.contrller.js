const Notes = require('../models/Note');
// const flash = require('connect-flash');
const notesCtrl = {}

notesCtrl.renderNoteForm = (_req, res) => {
    res.render('notes/new-note');   
}

notesCtrl.createNewNote = async (req, res) => {
    const { title, description} = req.body;
    const newNote = new Notes({ title, description });
    newNote.user = req.user.id;
    await newNote.save();
    req.flash("success_msg", "Note Added Successfully");
    res.redirect('/notes');    
}

notesCtrl.renderNotes = async (req, res) => {
    const notes = await Notes.find({ user: req.user.id }).sort({createdAt: 'desc'});
    res.render('notes/all-notes', { notes }); 
}

notesCtrl.renderEditForm = async (req, res) => {
    const note = await Notes.findById(req.params.id);
    if (note.user != req.user.id) {
        req.flash("error_msg", "Not Authorized");
        return res.redirect('/notes');
    }
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