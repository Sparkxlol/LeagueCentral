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
    }, 
    email: {
        type: String, 
        required: [true, 'This field is required'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Invalid email'],
        trim: true,

    }, 
    password: {
        type: String, 
        required: [true, 'This field is required'],
        trim: true,
        minLength: 8,
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
    },
    organization: {
        type: mongoose.SchemaTypes.ObjectId,
        required: [true, 'This field is required'],
        ref: Organization,
    },
    phone: {
        type: String,
        trim: true,
    },
    profilePicture: String,
})

module.exports = mongoose.model("User", userSchema);