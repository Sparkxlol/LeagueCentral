import React from 'react'
import SportInfo from './SportInfo'

function activeSport({arr}) {

  const rows = []
  
  
  
  const sports = {arr}.arr
  
  for(let i = 0; i < sports.length; i++) {
    
    rows.push(<SportInfo sport={sports[i].sport.name} start={sports[i].league.startDate} end={sports[i].league.endDate} entireLeague={sports[i]}/>)
  }



  return (

    <div className='sections'>
      {rows}
    </div>
  )
}

export default activeSport
