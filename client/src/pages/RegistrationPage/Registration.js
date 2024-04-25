import React, { useState } from 'react'
import './Registration.css'
import {Link} from 'react-router-dom'
import mail_icon from '../../Assets/email.png'
import password_icon from '../../Assets/password.png'
import user_icon from '../../Assets/person.png'
import axios from 'axios'

function Registration() {

  const[details, setDetails] = useState({
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: '',
    dateOfBirth: '',
    gender: '',
    phone: ''
  })
  

  function handleChange (event) {
    
    const name = event.target.name
    const val = event.target.value
    
    setDetails((prev) => {
      return {...prev, [name]: val}
    })
    
  }

  function handleSubmit (event) {
    event.preventDefault()

    const userInfo = details

    console.log(userInfo)

    axios.post('/api/users/', userInfo).then(res => {
      console.log(res)
      console.log(res.data)
    })

  }


  return (
    <div className = 'login'>
    <div className = 'header'>
      <div className = 'text'>Register</div>
      <div className = 'underline'></div>
    </div>
    <div className='required'>
      * denotes required field
    </div>
    <div className = 'inputs'>
      <div className='input'>
        <input placeholder='First name   *' type='text' id='fName' name='firstName' onChange={handleChange}/>
      </div>
      <div className='input'>
        <input placeholder='Last name   *' type='text' id='lName' name='lastName' onChange={handleChange}/>
      </div>
      <div className='input'>
        <img src = {user_icon} alt = ''/>
        <input placeholder='Username   *' type='text' id='userName' name='userName' onChange={handleChange} />
      </div>
      <div className='input'>
        <img src={mail_icon} alt=''/>
        <input placeholder='Email   *' type='email' id='email' name='email' onChange={handleChange} />
      </div>
      <div className='input'>
        <img src={password_icon} alt=''/>
        <input placeholder='Password   *' type='password' id='pass' name='password' onChange={handleChange} /> 
      </div>
      <div className='input'>
        <label htmlFor="birthday">Birthday:</label>
        <input type='date' id='bday' name='dateOfBirth' onChange={handleChange} />
        <p>*</p>
      </div>
      <div className='input'>
        <select id='gender' name='gender' onChange={handleChange}> 
          <option value = 'male'>male</option>
          <option value = 'female'>female</option>
          <option value = 'other'>other</option>
        </select>
        <p>*</p>
      </div>
      <div className='input'>
        <input placeholder='Phone' type='text' id='phone' name='phone' onChange={handleChange} />
      </div>
    </div>
    <div className ='forgot-password'>Already have an account?<Link to = '/Login'>Login here.</Link></div>
    <div className ='submit'>
      <button className = 'submission' onClick={handleSubmit}>Create Account</button>
    </div>
  </div>
  )
}

export default Registration
