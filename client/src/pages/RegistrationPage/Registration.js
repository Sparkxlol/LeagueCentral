import React from 'react'
import './Registration.css'
import {Link} from 'react-router-dom'
import mail_icon from '../../Assets/email.png'
import password_icon from '../../Assets/password.png'

function Registration() {
  return (
    <div className = 'login'>
    <div className = 'header'>
      <div className = 'text'>Register</div>
      <div className = 'underline'></div>
    </div>
    <div className = 'inputs'>
      <div className='input'>
        <input placeholder='First name' type='text'/>
      </div>
      <div className='input'>
        <input placeholder='Last name' type='text'/>
      </div>
      <div className='input'>
        <input placeholder='Username' type='text'/>
      </div>
      <div className='input'>
        <img src={mail_icon} alt=''/>
        <input placeholder='Email' type='email'/>
      </div>
      <div className='input'>
        <img src={password_icon} alt=''/>
        <input placeholder='Password' type='password'/> 
      </div>
      <div className='input'>
        <label for="birthday">Birthday:</label>
        <input type='date' name='Date of Birth'/>
      </div>
      <div className='input'>
        <select name='Gender' id='gender'> 
          <option value = 'male'>male</option>
          <option value = 'female'>female</option>
          <option value = 'other'>other</option>
        </select>
      </div>
      <div className='input'>
        <input placeholder='Phone' type='text'/>
      </div>
    </div>
    <div className ='forgot-password'>Already have an account?<Link to = '/Login'>Login here.</Link></div>
    <div className ='submit'>
      <div className = 'submission'>Create Account</div>
    </div>
  </div>
  )
}

export default Registration
