const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    winnerScore: {
        type: Number,
        required: [true, 'This field is required'],
        min: 1,
    },
    loserScore: {
        type: Number,
        required: [true, 'This field is required'],
    }
})

module.exports = mongoose.model('Game', gameSchema);