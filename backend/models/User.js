const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: { type: String, enum: ['admin', 'instructor'], required: true }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
