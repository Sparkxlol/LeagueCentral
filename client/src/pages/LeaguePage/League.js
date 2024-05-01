import React from 'react'
import { useAsyncError, useLocation, useParams } from 'react-router-dom'
import TeamLeagueDisplay from '../../components/TeamLeagueDisplay'
import './League.css'
import MatchList from '../../components/MatchList'
import axios from 'axios'
import {useState, useEffect} from 'react'

function League() {

   // const location = useLocation()
    // const {sport} = location.state
  
  //const location = useLocation()
  const {id} = useParams()
  console.log(id)
  const [league, setLeague] = useState('')
  const [sport, setSport] = useState('')
  const [matchRows, setmatchRows] = useState('')
  const [loading, setLoading] = useState(true);


    useEffect(() => {
      const fetchData = async () => {
        const res = await axios.get(`/api/leagues/${id}`)
          setLeague(res.data)
          setSport(res.data.sport)
        const res2 = await axios.get(`/api/leagues/matches/${id}`)
          setmatchRows(res2.data)
        setLoading(false)
      }
      fetchData()
    }, [id]);
  
    if (loading) {
      return <div className='loading'>Loading...</div>
    }
    
    
  
  const rows = []
  
  for(let i = 0; i < league.teams.length; i++) {
    rows.push(<TeamLeagueDisplay team={league.teams[i]}/>)
  }
  
    console.log('matchrowhere')
    console.log(matchRows.length)
    console.log(matchRows)
    const matchList = []
    for(let i = 0; i < matchRows.length; i++) {
      console.log("im hereeee")
      console.log(matchRows[i])
      matchList.push(<MatchList match={matchRows[i]} />)
    }
    
  return (
      
      <div className='container1'>
        
        <p className='vs'>{sport.name}</p>
        <div className='match-info'>
          <p>{sport.description}</p>
          <p>Max Players: {sport.maxPlayers}</p>
          <p>Maximum team members: {sport.maxRoster}</p>
        </div>
        

        <p className='rost'>Competing Teams:</p>
        
        {rows}

        <p className='rost'>Upcoming Matches:</p>
        {matchList}
      </div>
    
  )
}

export default League
