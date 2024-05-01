import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import './Team.css'
import PlayerDisplay from '../../components/PlayerDisplay'
import { useEffect, useState } from 'react'
import axios from 'axios'

function Team() {

  const {id} = useParams()

  
  
  const [loading, setLoading] = useState(true);
  const [team, setTeam] = useState('')
    useEffect(() => {
      const fetchData = async () => {
        const res = await axios.get(`/api/teams/${id}`)
          setTeam(res.data)
        setLoading(false)
      }
      fetchData()
    }, [id]);

    if (loading) {
      return <div className='loading'>Loading...</div>
    }
  const rows = []
  console.log(team)

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
