const mongoose = require('mongoose');

const leagueSchema = new mongoose.Schema({
    teams: [{
        'type': mongoose.SchemaTypes.ObjectId,
        'ref': 'Team'
    }],
    //! unsure if this is correct
    sport: {
        type: mongoose.SchemaTypes.ObjectId,
        required: [true, 'This field is required'],
        ref: 'Sport'
    }
})

module.exports = mongoose.model("League", leagueSchema);