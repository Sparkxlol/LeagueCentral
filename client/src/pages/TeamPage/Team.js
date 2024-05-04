import React from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import './Team.css'
import PlayerDisplay from './PlayerDisplay'
import { useEffect, useState } from 'react'
import axios from 'axios'
import user_icon from '../../Assets/person.png'
import LastMatch from './LastMatch'


function Team() {

  const {id} = useParams()

  
  
  const [loading, setLoading] = useState(true);
  const [team, setTeam] = useState('');
  const [lastMatch, setLastMatch] = useState('');
  const [league, setLeague] = useState('');
    
  useEffect(() => {
      const fetchData = async () => {
        const res = await axios.get(`/api/teams/${id}`)
          setTeam(res.data);
        const res1 = await axios.get(`/api/teams/latest/${id}`)
          setLastMatch(res1.data);
          
        const res2 = await axios.get(`/api/teams/league/${id}`)
          setLeague(res2.data);
          console.log(res2.data)
          
        setLoading(false)
      }
      fetchData()
    }, [id]);

    if (loading) {
      return <div className='loading'>Loading...</div>
    }
  const rows = []

  
  for(let i = 0; i < team.players.length; i++) {
    rows.push(<PlayerDisplay player={team.players[i]}/>)
  }
  
  
  
  

  const joinLink = '/JoinTeam/' + team._id
  

  return (
    <>
      <div className='team1'>
        <img src= {(team.picture) ? team.picture : user_icon} alt = ''/>
        {team.name}
        <div className='joinTeam'><Link to={joinLink}>Join Team</Link></div>
      </div>
      <hr className='solid'/>
      <div className='top'>
        <div className='column'>
          <p className='roster-header'>Roster:</p>
          <div className='container4'>  
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
          <p className='team-sport-header'>Sport:</p>
          <div className='team-sport-container'>
            <div className='the-sport'>
              <p className='sport-info'>Sport: {league.sport.name}</p>
              <p className='sport-info'>Players on field: {league.sport.maxPlayers}</p>
              <p className='sport-info'>Max players on team: {league.sport.maxRoster}</p>
              <p className='sport-info'>Description: </p>
              <p className='sport-info-description'>{league.sport.description}</p>
            </div>
          </div>
        </div>
      </div>
      <LastMatch lMatch={lastMatch} pid={id} pTeam={team}/>
    </>
  )
}

export default Team
