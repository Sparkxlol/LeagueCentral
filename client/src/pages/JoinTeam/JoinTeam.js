import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';

function JoinTeam() {

    const [loading, setLoading] = useState(true);
    const [players, setPlayers] = useState('')
    const [users, setUsers] = useState('')
    const {id} = useParams()
    const [league, setLeague] = useState('')
    console.log('joininging team')
    console.log(id)

    useEffect(() => {
        const fetchData = async () => {
          const res = await axios.get(`/api/teams/players/${id}`)
            setPlayers(res.data);
            console.log('kys')
          const res3 = await axios.get(`/api/teams/league/${id}`)
            setLeague(res3.data);
            console.log('die')
            console.log(res3.data)
            
          const res2 = await axios.get(`/api/users/organization/${res3.data.organization}`)
            setUsers(res2.data)
          setLoading(false)
        }
        fetchData()
      }, [id]);
  
      if (loading) {
        return <div className='loading'>Loading...</div>
      }


    for(let i = 0; i < players.length; i++) {
        for(let j = 0; j < users.length; j++) {
            if(players[i]._id == users[j]._id) {
                delete users[j]
            }
        }
    }


  return (
    <div className='JoinTeamContainer'>HII
        {users}
      
    </div>
  )
}

export default JoinTeam
