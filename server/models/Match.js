const mongoose = require('mongoose');

const matchSchema = new mongoose.Schema({
    winnerScore: {
        type: Number,
        required: [true, 'This field is required'],
    },
    loserScore: {
        type: Number,
        required: [true, 'This field is required'],
    },
    date: {
        type: Date,
        required: [true, 'This field is required']
    },
    teams: [{
        'type': mongoose.SchemaTypes.ObjectId,
        'required': [true, 'This field is required'],
        'ref': 'Team'
    }],
    league: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'League',
    },
    tournament: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Tournament'
    }
})

module.exports = mongoose.model("Match", matchSchema);