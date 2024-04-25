const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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
        maxLength: [16, 'Username cannot exceed 16 characters'],
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
        maxLength: [16, 'Password cannot exceed 16 characters'],
    }, 
    dateOfBirth: {
        type: Date,
        required: [true, 'This field is required'],
        //TODO: make minimum age X years old
    },
    gender: {
        type: String, 
        required: [true, 'This field is required'],
        trim: true,
        lowercase: true,
        enum: ['male', 'female', 'other'],
    },
    // organization: {
    //     type: mongoose.SchemaTypes.ObjectId,
    //     required: [true, 'This field is required'],
    //     ref: 'Organization',
    //     //? enforce only one organization
    // },
    phone: {
        type: String,
        trim: true,
        match: [/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im, 'Invalid format'],
        unique: true,
        sparse: true
    },
    profilePicture: String,
})

// Runs after validation, but before creation. 
// Salts and hashes the newly-created password.
userSchema.pre('save', function(next) {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync());
    
    next();
})

//static method that queries a user by email. Useful for finding and sending invites to teammates through email
//RegExp makes the email case insensitive
userSchema.statics.findByEmail = function(email) {
    return this.where({email: new RegExp(email, 'i')});
}

module.exports = mongoose.model("User", userSchema);