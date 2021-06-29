const {Schema, model} = require('mongoose');

const noteSchema = Schema({
    title: String,
    description: {
        type: String,
        required: true
    },
    deleted: {
        type: Boolean,
        default: false
    }
});

module.exports = model('note', noteSchema);