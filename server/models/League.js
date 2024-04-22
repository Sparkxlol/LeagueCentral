const mongoose = require('mongoose');

const leagueSchema = new mongoose.Schema({
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
    },
    organization: {
        type: mongoose.SchemaTypes.ObjectId,
        required: [true, 'This field is required'],
        ref: 'Organization'
    }
})

module.exports = mongoose.model("League", leagueSchema);