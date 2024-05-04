import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



function CreateTeam() {

    const {id} = useParams()
    const[details, setDetails] = useState({
        name: '',
        description: '',
        picture: '',
        players: []
    })
    const nav = useNavigate()
    const [newTeam, setnewTeam] = useState('')

    function handleChange (event) {
    
        const name = event.target.name
        const val = event.target.value
        
        setDetails((prev) => {
          return {...prev, [name]: val}
        })
        console.log(details)
        
      }
    
    async function handleSubmit (event) {
        event.preventDefault()
        handleChange(event)

        const userInfo = details
    
        console.log('userinfo')
        console.log(userInfo)

        let newId = null
    
        await axios.post('/api/teams/', userInfo).then(res => {
          console.log(res.data)
          newId = res.data._id
        })

        //add team to league
        const requestBody = {teamID: newId}
        console.log(requestBody)

        await axios.patch(`/api/leagues/teams/${id}`, requestBody).then(res2 => {
          console.log(res2.data)
        })
        nav('/League/' + id)
    
    }



  return (
    <>
    <div className = 'inputs'>
        <div className='input'>
          <input placeholder='Team name   *' type='text' id='name' name='name' onChange={handleChange}/>
        </div>
        <div className='input'>
          <input placeholder='Team description   *' type='text' id='description' name='description' onChange={handleChange}/>
        </div>
        
    </div>
    <div className ='submit'>
        <button className = 'submission' onClick={handleSubmit}>Create Account</button>
    </div>
    </>
  )
}

export default CreateTeam
