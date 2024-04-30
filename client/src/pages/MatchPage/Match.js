import axios from 'axios';
import React, { useState, useEffect } from 'react'
import {  useParams } from 'react-router-dom'
import './Match.css'
import user_icon from '../../Assets/person.png'
import Roster from '../../components/Roster';
const {DateTime} = require('luxon')

function Match() {

    // const location = useLocation()
    // const {sport} = location.state

  const { matchID } = useParams();
  const [match, setMatch] = useState('');
  const [organization, setOrganization] = useState('');
  const [team, setTeam] = useState('');
  const [roster1, setRoster1] = useState('');
  const [roster2, setRoster2] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res1 = await axios.get(`/api/matches/${matchID}`)
          setMatch(res1.data);

      const res2 = await axios.get(`/api/matches/organization/${matchID}`)
          setOrganization(res2.data);

      const res3 = await axios.get(`/api/matches/teams/${matchID}`)
          setTeam(res3.data);
      
      const res4 = await axios.get(`/api/teams/players/${res3.data[0]._id}`)
          setRoster1(res4.data);

      const res5 = await axios.get(`/api/teams/players/${res3.data[1]._id}`)
          setRoster2(res5.data);
        
        setLoading(false);
    }
    fetchData();
  }, [matchID]);

  if (loading) {
    return <div className='loading'>Loading...</div>
  }

  const dt = DateTime.fromISO(match.date);

  const team1 = []
  for(let i = 0; i < roster1.length; i++){
    team1.push(<Roster profilePicture = {roster1[i].profilePicture ? roster1[i].profilePicture : user_icon}firstName = {roster1[i].firstName} lastName = {roster1[i].lastName}/>)
  }

  const team2 = []
  for(let i = 0; i < roster2.length; i++){
    team2.push(<Roster profilePicture = {roster2[i].profilePicture ? roster2[i].profilePicture : user_icon} firstName = {roster2[i].firstName} lastName = {roster2[i].lastName}/>)
  }

  return (
    <div className='container1'>
      <div className='team-display'>
        <div>
          <img src={(team[0].picture) ? team[0].picture : user_icon} alt=''/>
          <div className='team'>{team[0].name}</div>
        </div>
        <div>
          <p className='vs'>VS</p>
        </div>
        <div>
          <div className='team'>{team[1].name}</div>
          <img src={(team[1].picture) ? team[1].picture : user_icon} alt=''/>
        </div>
      </div>
      <div className='match-info'>
        {organization.address} 
        <br></br>{dt.toLocaleString(DateTime.DATETIME_SHORT)}
      </div>
      <p className='rost'>Rosters:</p>
      <hr className='solid'/>
      <div className='roster-display'>
        <div className='roster1'>
          {team1}
        </div>
        <div className='roster2'>
          {team2}
        </div>
      </div>
    </div>
  )
}





export default Match