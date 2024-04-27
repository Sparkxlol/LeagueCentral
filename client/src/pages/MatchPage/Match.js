import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import './Match.css'
import user_icon from '../../Assets/person.png'

function Match() {

    // const location = useLocation()
    // const {sport} = location.state

  const { matchID } = useParams();
  const [match, setMatch] = useState('');
  const [team, setTeam] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`/api/matches/${matchID}`).then(
      res => {
        setMatch(res.data);
        console.log(res.data);
      }
    );

    axios.get(`/api/matches/teams/${matchID}`).then(
      res => {
        setTeam(res.data);
        console.log(res.data);
      }
    ).finally(() => {
      setLoading(false);
    });
  }, [matchID]);

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className='container1'>
      <div className='team-display'>
          <img src={user_icon}/>
          <div className='team'>{team[0].name}</div>
          <p>VS</p>
          <div className='team'>{team[1].name}</div>
          <img src={user_icon}/>
      </div>
      <div className='match-info'>
        Stankowski Field
        <br></br>5:00 pm, April 25, 2024
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
