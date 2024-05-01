import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function TeamLeagueDisplay(props) {

  console.log('hi')
  console.log(props.team)

  const [competingTeams, setcompetingTeams] = useState('')
    useEffect(() => {
      const fetchData = async () => {
        const res = await axios.get(`/api/teams/${props.team}`)
          setcompetingTeams(res.data)
        
      }
      fetchData()
    }, [props.team]);

    console.log(competingTeams)
  return (
    <div className='teamsInLeague'>
        <Link to='/team' state={{team: competingTeams}}>{competingTeams.name}</Link>
        <div className='teamDescription'>: {competingTeams.description}</div>
        
    </div>
  )
}

export default TeamLeagueDisplay
