import React from 'react'
import { Link } from 'react-router-dom'
const {DateTime} = require('luxon')


function SportInfo(props) {
  const startDate = DateTime.fromISO(props.start)
  const endDate = DateTime.fromISO(props.end)
  
  return (
    
    <div className='section'>
        <Link to='/league' state={{leagueAndSport: props.entireLeague}}>{props.sport}</Link> 
        <div className='date'>{startDate.toLocaleString(DateTime.DATE_SHORT)} - {endDate.toLocaleString(DateTime.DATE_SHORT)}</div>
        
    </div>
  )
}

export default SportInfo;