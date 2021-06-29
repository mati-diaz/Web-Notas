const {Router} = require('express');
const router = Router();
const { renderIndex, 
        renderNewNoteForm, 
        saveNote, 
        renderTrash, 
        senTrash, 
        deleteNote, 
        deleteAll, 
        restoreNote, 
        renderEditForm,
        editNote} = require('../controllers');

router.get('/', renderIndex);

// New Note
router.get('/new-note', renderNewNoteForm);
router.post('/new-note', saveNote);

// Edit Note
router.get('/edit-note/:id', renderEditForm);
router.post('/edit-note/:id', editNote);

// Send to trash
router.post('/delete-note/:id', senTrash);

// Trash
router.get('/trash', renderTrash);
router.post('/delete/:id', deleteNote);
router.post('/empty-trash', deleteAll);
router.post('/restore/:id', restoreNote);

module.exports = router;