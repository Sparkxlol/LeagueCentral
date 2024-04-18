const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    firstName: {
        type: String, 
        required: [true, 'This field is required'],
        trim: true,
    },
    lastName: {
        type: String, 
        required: [true, 'This field is required'],
        trim: true,
    }, 
    userName: {
        type: String,
        required: [true, 'This field is required'],
        trim: true,
        minLength: [3, 'Username must be at least 3 characters'],
        unique: true,
    }, 
    email: {
        type: String, 
        required: [true, 'This field is required'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Invalid email'],
        trim: true,
        unique: true,
    }, 
    password: {
        type: String, 
        required: [true, 'This field is required'],
        trim: true,
        minLength: [8, 'Password must be at least 8 characters'],
    }, 
    dateOfBirth: {
        type: Date,
        required: [true, 'This field is required'],
    },
    gender: {
        type: String, 
        required: [true, 'This field is required'],
        trim: true,
        lowercase: true,
        enum: ['male', 'female', 'other'],
    },
    organization: {
        type: mongoose.SchemaTypes.ObjectId,
        required: [true, 'This field is required'],
        ref: 'Organization',
        //? enforce only one organization
    },
    phone: {
        type: String,
        trim: true,
        match: [/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im, 'Invalid format'],
        unique: true,
    },
    profilePicture: String,
})

module.exports = mongoose.model("User", userSchema);