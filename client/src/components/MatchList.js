import React from 'react'
import { Link } from 'react-router-dom'
import {useState, useEffect} from 'react'
import axios from 'axios'


function MatchList(props) {

    const matchID = props.match

    const [teamsInMatch, setteamsInMatch] = useState('')
    useEffect(() => {
      const fetchData = async () => {
        const res = await axios.get(`/api/matches/teams/${props.match}`)
          setteamsInMatch(res.data)
        
      }
      fetchData()
    }, [props.match]);



  return (
    <div className='matchList'>
      <Link to='/Match' state={{id: matchID}}>{teamsInMatch[0].name} vs {teamsInMatch[1].name}</Link>
    </div>
  )
}

export default MatchList
