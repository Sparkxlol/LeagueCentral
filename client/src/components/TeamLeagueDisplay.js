import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function TeamLeagueDisplay(props) {

  
  const [loading, setLoading] = useState(true);
  const [competingTeams, setcompetingTeams] = useState('')
    useEffect(() => {
      const fetchData = async () => {
        const res = await axios.get(`/api/teams/${props.team}`)
          setcompetingTeams(res.data)
        setLoading(false)
      }
      fetchData()
    }, [props.team]);

    
    if (loading) {
      return <div className='loading'>Loading...</div>
    }

    
  const link = '/team/' + competingTeams._id
  return (
    <div className='teamsInLeague'>
        <Link to={link} >{competingTeams.name}</Link>
        <div className='teamDescription'>: {competingTeams.description}</div>
        
    </div>
  )
}

export default TeamLeagueDisplay
