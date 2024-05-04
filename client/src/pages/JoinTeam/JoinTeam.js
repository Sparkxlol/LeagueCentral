import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import user_icon from '../../Assets/person.png'
import { useNavigate } from 'react-router-dom';
import './JoinTeam.css'

function JoinTeam() {

    const [loading, setLoading] = useState(true);
    const [players, setPlayers] = useState('')
    const [users, setUsers] = useState('')
    const {id} = useParams()
    
    const nav = useNavigate()

    useEffect(() => {
        const fetchData = async () => {
          const res = await axios.get(`/api/teams/players/${id}`)
            setPlayers(res.data);
          const res3 = await axios.get(`/api/teams/league/${id}`)
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

      console.log(users)
      
      const realArray = []
    

    let inArray = true
    for(let i =0; i < users.length; i++) {
      inArray = true
      for(let j = 0; j < players.length; j++) {
        if(players[j]._id == users[i]._id) {
          inArray = false
        }
      }

      if(inArray){
        realArray.push(<div className='selectUser'><button className='userSelect' value={users[i]._id} onClick={onClick}><img src= {(users[i].profilePicture) ? users[i].profilePicture : user_icon} alt = ''/> {users[i].firstName} {users[i].lastName}</button><br /></div>)

      }
    }

    function onClick (event) {
      const val = event.target.value

      handleSubmit(val)
    }

    async function handleSubmit (val) {
      
      const requestBody = {playerID: val}
  
      
      await axios.patch(`/api/teams/add/${id}`, requestBody).then(res => {
        console.log(res.data)
        
      })
  
      nav('/Team/' + id)
  
    }


  return (
    <div className='container1JoinTeam'>
        <div className='JoinTeamHeader'>Select a Player to Join the Team</div>
          <div className='JoinList'>
            {realArray}
          </div>
      
    </div>
  )
}

export default JoinTeam
