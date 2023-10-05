const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        maxlenght: 40,
        required: true
    },
    summary: {
        type: String,
        maxlenght: 40,
        required: true
    },
    content: {
        type: String,
        maxlenght: 400,
        required: true
    }
});

module.exports = mongoose.model('Post', postSchema);