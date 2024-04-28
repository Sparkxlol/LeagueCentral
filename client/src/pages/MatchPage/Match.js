import axios from 'axios';
import React, { useState, useEffect } from 'react'
import {  useParams } from 'react-router-dom'
import './Match.css'
import user_icon from '../../Assets/person.png'
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
    return <div>Loading...</div>
  }

  const dt = DateTime.fromISO(match.date);

  return (
    <div className='container1'>
      <div className='team-display'>
          <img src={user_icon} alt=''/>
          <div className='team'>{team[0].name}</div>
          <p>VS</p>
          <div className='team'>{team[1].name}</div>
          <img src={user_icon} alt=''/>
      </div>
      <div className='match-info'>
        {organization.address} 
        <br></br>{dt.toLocaleString(DateTime.DATETIME_SHORT)}
      </div>
      <p className='roster-display'>Rosters:</p>
      <hr className='solid'/>
      <div className='roster'>
        {/* INSERT ROSTER */}
      </div>
      <div className='roster'>
        {/* INSERT ROSTER */}
      </div>
    </div>
  )


}





export default Match
