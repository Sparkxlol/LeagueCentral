import React from 'react'
import { Link } from 'react-router-dom'
import {useState, useEffect} from 'react'
import axios from 'axios'


function MatchList(props) {

    const matchID = props.match._id
    

    const [teamsInMatch, setteamsInMatch] = useState('')
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      const fetchData = async () => {
        const res = await axios.get(`/api/matches/teams/${matchID}`)
          setteamsInMatch(res.data)
        setLoading(false)
      }
      fetchData()
    }, [matchID]);

    if (loading) {
      return <div className='loading'>Loading...</div>
    }
    

    const link = '/Match/' + matchID
  return (
    <div className='matchList'>
      <Link to={link}>{teamsInMatch[0].name} vs {teamsInMatch[1].name}</Link>
    </div>
  )
}

export default MatchList
