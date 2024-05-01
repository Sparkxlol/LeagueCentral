import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import './Team.css'
import PlayerDisplay from './PlayerDisplay'
import { useEffect, useState } from 'react'
import axios from 'axios'
import user_icon from '../../Assets/person.png'

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
    <>
      <div className='team'>
        <img src= {(team.picture) ? team.picture : user_icon} alt = ''/>
        {team.name}
      </div>
      <hr className='solid'/>
      <div className='top'>
        <div className='column'>
          <p className='roster-header'>Roster:</p>
          <div className='container1'>  
            <div className='roster'>
              {rows}
            </div>
          </div>
        </div>
        <div className='column'>
          <p className='desc-header'>Description:</p>
          <div className='container2'>
            <div className='desc'>{team.description}</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Team
