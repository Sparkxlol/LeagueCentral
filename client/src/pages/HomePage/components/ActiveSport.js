import React from 'react'
import SportInfo from './SportInfo'

function ActiveSport(props) {
  const rows = [];  
  const sports = props.sports;

  for(let i = 0; i < sports.length; i++) {
    rows.push(<SportInfo sport={sports[i].sport.name} start={sports[i].league.startDate}
                         end={sports[i].league.endDate} entireLeague={sports[i]}/>);
  }

  return (
    <div className='sections'>
      {rows}
    </div>
  )
}

export default ActiveSport
