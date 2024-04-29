const mongoose = require('mongoose');

const tournamentSchema = new mongoose.Schema({
    teams: [{
        'type': mongoose.SchemaTypes.ObjectId,
        'ref': 'Team',
        'required': [true, 'This field is required']
    }],
    sport: {
        type: mongoose.SchemaTypes.ObjectId,
        required: [true, 'This field is required'],
        ref: 'Sport'
    },
    startDate: {
        type: Date,
        required: [true, 'This field is required'],
    },
    endDate: {
        type: Date,
        required: [true, 'This field is required']
    }
})

module.exports = mongoose.model("Tournament", tournamentSchema);