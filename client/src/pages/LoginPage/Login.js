import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import './Login.css'
import mail_icon from '../../Assets/email.png'
import password_icon from '../../Assets/password.png'

function Login() {

  return (
    <div className = 'login'>
      <div className = 'header'>
        <div className = 'text'>Login</div>
        <div className = 'underline'></div>
      </div>
      <div className = 'inputs'>
        <div className='input'>
          <img src={mail_icon} alt=''/>
          <input placeholder='Email' type='email'/>
        </div>
        <div className='input'>
          <img src={password_icon} alt=''/>
          <input placeholder='Password' type='password'/>
        </div>  
      </div>
      <div className ='forgot-password'>Forgot Password?<span>Click here.</span></div>
      <div className ='submit'>
        <div className = 'submission'>Login</div>
        <div className = 'submission'><Link to = '/Registration'>Sign Up</Link></div>
      </div>
    </div>
  )
}




export default Login