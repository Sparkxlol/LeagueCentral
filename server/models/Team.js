const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
    players: [{
        'type': mongoose.SchemaTypes.ObjectId,
        'ref': 'User',
    }],
    name: {
        type: String,
        required: [true, 'This field is required'],
        minLength: [4, 'Name must be at least 4 characters'],
        maxLength: [20, 'Name cannot exceed 20 characters'],
        trim: true,
        match: [/^[a-z0-9 ]+$/i, 'Invalid character(s)'],
    },
    description: {
        type: String,
        maxLength: 255,
    },
    picture: String,
})

module.exports = mongoose.model('Team', teamSchema);