const { findByIdAndDelete } = require('../models/note');
const Note = require('../models/note');

const renderIndex = async (req, res) => {
    const notes = await Note.find();
    res.render('index', {notes});
}

const renderNewNoteForm = (req, res) => {
    res.render('newNote');
}

const saveNote = async (req, res) => {
    const {title, description} = req.body;
    const note = new Note({
        title,
        description
    });
    await note.save();
    res.redirect('/');
}

const senTrash = async (req, res) => {
    const id = req.params.id;
    await Note.findByIdAndUpdate(id, {deleted: true});
    res.redirect('/');
}

const renderTrash = async (req, res) => {
    const notes = await Note.find();
    res.render('deleted', {notes});
}

const deleteNote = async (req, res) => {
    const id = req.params.id;
    await Note.findByIdAndDelete({_id: id});
    res.redirect('/trash');
}

const deleteAll = async (req, res) => {
    await Note.deleteMany({deleted: true});
    res.redirect('/');
}

const restoreNote = async (req, res) => {
    const id = req.params.id;
    await Note.findByIdAndUpdate(id, {deleted: false});
    res.redirect('/trash');
}

const renderEditForm = async (req, res) => {
    const id = req.params.id;
    const note = await Note.findById({_id: id});
    res.render('edit', {note});
}

const editNote = async (req, res) => {
    const id = req.params.id;
    const {title, description} = req.body;
    await Note.findByIdAndUpdate(id, {title, description});
    res.redirect('/');
}

module.exports = {
    renderIndex,
    renderNewNoteForm,
    saveNote,
    senTrash,
    renderTrash,
    deleteNote,
    deleteAll,
    restoreNote,
    renderEditForm,
    editNote
}