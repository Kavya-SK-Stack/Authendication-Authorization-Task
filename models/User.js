const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: {
        type: String,
        enum: ['receptionist', 'manager', 'admin'],
        default: 'receptionist'
    },
    createdAt: {
        type: Date,
        dafault: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
});

mongoose.model('User', userSchema, 'users');