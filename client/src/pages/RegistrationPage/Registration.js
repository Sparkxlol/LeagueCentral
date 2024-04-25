import React, { useState } from 'react'
import './Registration.css'
import {Link} from 'react-router-dom'
import mail_icon from '../../Assets/email.png'
import password_icon from '../../Assets/password.png'
import user_icon from '../../Assets/person.png'
import axios from 'axios'

function Registration() {

  

  const [user, setUser] = useState({firstName: '',
   lastName: '',
    userName: '',
     email: '',
      password: '',
       birthday: '',
        gender: '',
         phoneNumber: ''})

  function handleChange (event) {
    const target = event.target
    const value = target.value
    const id = target.name
    const name = event.target.value
    const val = event.target.name
    setUser()
  }

  function handleSubmit (event) {
    event.preventDefault()

    const userInfo = {
      firstName: user.firstName,
      lastName: user.lastName,
      userName: user.userName,
      email: user.email,
      password: user.password,
      dateOfBirth: user.birthday,
      gender: user.gender,
      phone: user.phoneNumber
    }

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
        <input placeholder='First name   *' type='text' onChange={handleChange}/>
      </div>
      <div className='input'>
        <input placeholder='Last name   *' type='text' onChange={handleChange}/>
      </div>
      <div className='input'>
        <img src = {user_icon} alt = ''/>
        <input placeholder='Username   *' type='text' onChange={handleChange}/>
      </div>
      <div className='input'>
        <img src={mail_icon} alt=''/>
        <input placeholder='Email   *' type='email' onChange={handleChange}/>
      </div>
      <div className='input'>
        <img src={password_icon} alt=''/>
        <input placeholder='Password   *' type='password' onChange={handleChange}/> 
      </div>
      <div className='input'>
        <label htmlFor="birthday">Birthday:</label>
        <input type='date' name='Date of Birth' onChange={handleChange}/>
        <p>*</p>
      </div>
      <div className='input'>
        <select name='Gender' id='gender' onChange={handleChange}> 
          <option value = 'male'>male</option>
          <option value = 'female'>female</option>
          <option value = 'other'>other</option>
        </select>
        <p>*</p>
      </div>
      <div className='input'>
        <input placeholder='Phone' type='text' onChange={handleChange}/>
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
