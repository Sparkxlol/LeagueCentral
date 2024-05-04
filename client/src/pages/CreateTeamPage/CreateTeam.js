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
    
        await axios.post('/api/teams/', userInfo).then(res => {
          console.log(res.data)
        })

        //add team to league
    
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
