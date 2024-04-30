const mongoose = require('mongoose');

const matchSchema = new mongoose.Schema({
    team1Score: {
        type: Number,
        required: [true, 'This field is required'],
    },
    team2Score: {
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
        required: [true, 'This field is required']
    }
})

module.exports = mongoose.model("Match", matchSchema);