const mongoose = require('mongoose');

const sportSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'This field is required'],
        immutable: true,
        unique: true,
        trim: true,
    },
    description: {
        type: String,
        maxLength: 255,
    },
    maxPlayers: {
        type: Number,
        required: [true, 'This field is required'],
    },
    maxRoster: {
        type: Number,
        get: getMaxRoster,
    },
    picture: String,
})

function getMaxRoster(max) {
    return 2 * maxPlayers;
}

module.exports = mongoose.model('Sport', sportSchema);