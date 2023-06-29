const notesCtrl = {}

notesCtrl.renderNoteForm = (_req, res) => {
    res.send('note add')   
}

notesCtrl.createNewNote = (_req, res) => {
    res.send('new note')   
}

notesCtrl.renderNotes = (_req, res) => {
    res.send('render notes')   
}

notesCtrl.renderEditForm = (_req, res) => {
    res.send('render edit form')   
}

notesCtrl.updateNote = (_req, res) => {
    res.send('update note')   
}

notesCtrl.deleteNote = (_req, res) => {
    res.send('deleting note')   
}

module.exports = notesCtrl;