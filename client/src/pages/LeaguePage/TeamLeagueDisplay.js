import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './League.css'

function TeamLeagueDisplay(props) {

  
  const [loading, setLoading] = useState(true);
  const [competingTeams, setcompetingTeams] = useState('')
  console.log(props)
  console.log('teams')
    useEffect(() => {
      const fetchData = async () => {
        const res = await axios.get(`/api/teams/${props.team._id}`)
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
        <Link to={link} >{competingTeams.name}</Link>
  )
}

export default TeamLeagueDisplay
