import React from 'react'
import { Link } from 'react-router-dom';
import {useState, useEffect} from 'react'
import axios from 'axios';

function PlayerDisplay(props) {

    const [playerOnTeam, setplayerOnTeam] = useState('')
    useEffect(() => {
      const fetchData = async () => {
        const res = await axios.get(`/api/users/${props.player}`)
          setplayerOnTeam(res.data)
        
      }
      fetchData()
    }, [props.player]);

    console.log(playerOnTeam)

  return (
    <div className='playersOnTeam'>
      <Link to='/Profile' state={{user: playerOnTeam}}>{playerOnTeam.firstName} {playerOnTeam.lastName}</Link>
    </div>
  )
}

export default PlayerDisplay
