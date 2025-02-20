const mongoose = require('mongoose');

const instructorSchema = mongoose.Schema({
    name: String,
    email: String
});

module.exports = mongoose.model('Instructor', instructorSchema);
