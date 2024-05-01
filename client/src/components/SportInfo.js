import React from 'react'
import { Link } from 'react-router-dom'
const {DateTime} = require('luxon')


function SportInfo(props) {
  const startDate = DateTime.fromISO(props.start)
  const endDate = DateTime.fromISO(props.end)
  
  const link = '/league/' + props.entireLeague.league._id
  
  return (
    
    <div className='section'>
        <Link to={link} state={{leagueAndSport: props.entireLeague}}>{props.sport}</Link> 
        <div className='date'>{startDate.toLocaleString(DateTime.DATE_SHORT)} - {endDate.toLocaleString(DateTime.DATE_SHORT)}</div>
        
    </div>
  )
}

export default SportInfo;