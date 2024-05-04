import React from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import './Team.css'
import PlayerDisplay from './PlayerDisplay'
import { useEffect, useState } from 'react'
import axios from 'axios'
import user_icon from '../../Assets/person.png'
const {DateTime} = require('luxon')

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

  const opponent = lastMatch.teams[0]._id !== id ? lastMatch.teams[0] : lastMatch.teams[1];
  const dt = DateTime.fromISO(lastMatch.date);
  
  let didWin;
  if((lastMatch.teams[0]._id === id) && (lastMatch.team1Score > lastMatch.team2Score)) {
    didWin = true;
  }
  else if((lastMatch.teams[0]._id === id) && (lastMatch.team1Score < lastMatch.team2Score)) {
    didWin = false;
  }
  else if((lastMatch.teams[1]._id === id) && (lastMatch.team2Score > lastMatch.team1Score)) {
    didWin = true;
  }
  else if((lastMatch.teams[1]._id === id) && (lastMatch.team2Score < lastMatch.team1Score)) {
    didWin = false;
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
      <div className='last-match'>
        <p className='last-match-header'>Last Match:</p>
        <div className='last-match-container'>
          <div className='teamz'>
            <img src={(team.picture) ? team.picture : user_icon} alt=''/>
            {team.name}
          </div>
          <div>
          <div className='scoreDisplay' >
            {didWin ? <p className='w'>W</p> : <p className='l'>L</p>}
              <p className='theScore'>
                <p>: </p>
                <p>{lastMatch.teams[0]._id === id ? lastMatch.team1Score : lastMatch.team2Score}</p>
                <p>-</p>
                <p>{lastMatch.teams[0]._id === id ? lastMatch.team2Score : lastMatch.team1Score}</p>
            </p>
            </div> 
            <p className='vs'>VS</p>
            <p className='date'>{dt.toLocaleString(DateTime.DATETIME_SHORT)}</p>
          </div>
          <div className='teamz'>
            {opponent.name}
            <img src={(opponent.picture) ? opponent.picture : user_icon} alt=''/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Team
