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

    const link = '/Profile/' + playerOnTeam._id 
  return (
    <div className='playersOnTeam'>
      <Link to={link} >{playerOnTeam.firstName} {playerOnTeam.lastName}</Link>
    </div>
  )
}

export default PlayerDisplay
