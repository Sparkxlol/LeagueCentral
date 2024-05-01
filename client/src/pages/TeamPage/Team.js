import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import './Team.css'
import PlayerDisplay from '../../components/PlayerDisplay'

function Team() {

  const location = useLocation()
  const {state} = location

  const team = state.team
  console.log(team.players)

  const rows = []

  for(let i = 0; i < team.players.length; i++) {
    rows.push(<PlayerDisplay player={team.players[i]}/>)
  }

  return (
    <div className='container1'>
      <div className='teamName'>{team.name}</div>
      <p className='teamDes'>{team.description}</p>
      <div className='roster'>
        {rows}
      </div>

    </div>
  )
}

export default Team
