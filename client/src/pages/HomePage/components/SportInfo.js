import React from 'react'
import { Link } from 'react-router-dom'
const { DateTime } = require('luxon')

function SportInfo(props) {
  const startDate = DateTime.fromISO(props.start).toLocaleString(DateTime.DATETIME_SHORT);
  const endDate = DateTime.fromISO(props.end).toLocaleString(DateTime.DATETIME_SHORT);
  
  const leagueLink = '/league/' + props.entireLeague.league._id

  return (
    <div className='section'>
        <Link to={leagueLink}>{props.sport}</Link> 
        <div className='date'>{startDate} - {endDate}</div>
    </div>
  )
}

export default SportInfo;