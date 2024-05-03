import React from 'react'
import { Link } from 'react-router-dom';
import {useState, useEffect} from 'react'
import axios from 'axios';
import user_icon from '../../Assets/person.png'
import './Team.css'

function PlayerDisplay(props) {

    const [playerOnTeam, setplayerOnTeam] = useState('')
    useEffect(() => {
      const fetchData = async () => {
        const res = await axios.get(`/api/users/${props.player}`)
          setplayerOnTeam(res.data)
        
      }
      fetchData()
    }, [props.player]);


    const link = '/Profile/' + playerOnTeam._id 
  return (
    <div className='playersOnTeam'>
      <Link to={link} > <img src = {(playerOnTeam.profilePicture) ? playerOnTeam.profilePicture : user_icon}/> {playerOnTeam.firstName} {playerOnTeam.lastName}</Link>
    </div>
  )
}

export default PlayerDisplay
