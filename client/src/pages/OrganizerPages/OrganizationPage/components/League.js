import React from 'react'
import { Link } from 'react-router-dom'
import {useState, useEffect} from 'react'
const {DateTime} = require('luxon')


// Props includes match and teams w/ players
function League(props) {
    const league = props.league;
    const sport = props.sport;

    const startDate = DateTime.fromISO(league.startDate);
    const endDate = DateTime.fromISO(league.endDate);

    const viewLink = `../league/${league._id}`;

    return (
        <div className='section'>
            <div className='column'>
                <div className='row'>
                    <div className='subheader flex-1'>
                        {sport.name}
                    </div>
                    <div className='flex-1'>
                        {startDate.toLocaleString(DateTime.DATETIME_SHORT)} - {endDate.toLocaleString(DateTime.DATETIME_SHORT)}
                    </div>
                </div>
                <div className='small-text-row'>
                    <Link to={viewLink}>View</Link>
                </div>
            </div>
        </div>
    )
}

export default League;