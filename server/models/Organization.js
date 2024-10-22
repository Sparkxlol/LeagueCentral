const mongoose = require('mongoose');

const organizationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'This field is required'],
        trim: true,
        maxlength: [60, '60 character limit'],
        unique: true,
    },
    email: {
        type: String,
        required: [true, 'This field is required'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Invalid email'],
        trim: true,
        unique: true,
    },
    userName: {
        type: String,
        required: [true, 'This field is required'],
        trim: true,
        minLength: [3, 'Username must be at least 3 characters'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'This field is required'],
        trim: true,
        minLength: [8, 'Password must be at least 8 characters'],
    },
    phone: {
        type: String,
        trim: true,
        match: [/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im, 'Invalid format'],
        unique: true,
        sparse: true
    },
    address: {
        type: String,
        required: [true, 'This field is required']
    },
    profilePicture: String,
})

/*Static method that queries an organization by its name. Useful for finding the organization that you are joining.
RegExp makes the name case insensitive.*/
organizationSchema.statics.findByName = function(name) {
    return this.where({name: new RegExp(email,'i')});
}

module.exports = mongoose.model("Organization", organizationSchema);