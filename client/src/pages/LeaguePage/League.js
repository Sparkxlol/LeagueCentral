import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import TeamLeagueDisplay from '../../components/TeamLeagueDisplay'
import './League.css'
import MatchList from '../../components/MatchList'
import axios from 'axios'
import {useState, useEffect} from 'react'

function League() {

   // const location = useLocation()
    // const {sport} = location.state
  
  //const location = useLocation()
  const {leagueID} = useParams()
  console.log(leagueID)
  const [league, setLeague] = useState('')
  const [sport, setSport] = useState('')
  const [loading, setLoading] = useState(true);


    useEffect(() => {
      const fetchData = async () => {
        const res = await axios.get(`/api/leagues/${leagueID}`)
          setLeague(res.data)
        
        setLoading(false)
      }
      fetchData()
    }, [leagueID]);
  
    if (loading) {
      return <div className='loading'>Loading...</div>
    }
  
  console.log({league})
  console.log('kys')
  
  
  
  const rows = []
  for(let i = 0; i < league.teams.length; i++) {
    rows.push(<TeamLeagueDisplay team={league.teams[i]}/>)
  }

  const matchRows = []
  // matchRows.push(<MatchList match={matchArray[i]} />)

  return (
    <>
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
      </div>
    </>
  )
}

export default League
