import React from 'react'
import { Link } from 'react-router-dom'
import {useState, useEffect} from 'react'
const {DateTime} = require('luxon')


// Props includes match and teams w/ players
function Match(props) {
    const match = props.match;
    const teams = props.teams;

    const dt = DateTime.fromISO(match.date);
    const matchLink = "../match/edit/" + match._id;

    return (
        <div className='section'>
            <div className='row'>
                <div className='column flex-1'>
                    <div className='subheader'>
                        {teams[0].name}
                    </div>
                    <div className='column small-text-row'>
                        {teams[0].players.map((player, index) => (
                            <div key={index}>{player.firstName} {player.lastName}</div>
                        ))}
                    </div>
                </div>
                <div className='column flex-1'>
                    <div>
                        {match.team1Score} - {match.team2Score}
                    </div>
                    <div class='small-text-row'>
                        {dt.toLocaleString(DateTime.DATETIME_SHORT)}
                    </div>
                    <div class='small-text-row'>
                        <Link to={matchLink}>Edit</Link>
                    </div>
                </div>
                <div className='column flex-1'>
                    <div className='subheader'>
                        {teams[1].name}
                    </div>
                    <div className='column small-text-row'>
                        {teams[1].players.map((player, index) => (
                            <div key={index}>{player.firstName} {player.lastName}</div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Match;