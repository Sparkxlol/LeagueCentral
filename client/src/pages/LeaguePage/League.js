import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import TeamLeagueDisplay from '../../components/TeamLeagueDisplay'

function League() {

   // const location = useLocation()
    // const {sport} = location.state
  
  const location = useLocation()
  const {state} = location
  
  const league = state.leagueAndSport.league
  console.log(league)
  
  const sport = state.leagueAndSport.sport
  console.log(sport.name)
  
  
  const rows = []
  for(let i = 0; i < league.teams; i++) {
    rows.push(<TeamLeagueDisplay team={league.teams[i]}/>)
  }

  return (
    <>
      <div>
        {rows}
      </div>
    </>
  )
}

export default League
