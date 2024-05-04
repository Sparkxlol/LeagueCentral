import {Link , useNavigate} from 'react-router-dom'
import './Login.css'
import mail_icon from '../../Assets/email.png'
import password_icon from '../../Assets/password.png'
import { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import useSignIn from 'react-auth-kit/hooks/useSignIn'
import AuthContext from '../../components/AuthProvider'

function Login() {
  
  const { setAuth } = useContext(AuthContext)
  const[details, setDetails] = useState({
    email: '',
    password: ''
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
    let user = null
    

    console.log(userInfo)

    await axios.post('/api/users/login', userInfo).then(res => {
      console.log('hi')
      console.log(res.data)
      user = (res.data)
      
    //   signIn({
    //     token: res.data.token,
    //     expiresIn: 3600,
    //     tokenType: 'Bearer',
    //     authState: {id: user._id}
    //   })
    //   console.log('res')
    })

    console.log('user')
    console.log(user)
    
    nav('/' + user.organization)

  }
  
  
  
  return (
    <div className = 'login'>
      <div className = 'header'>
        <div className = 'text'>Login</div>
        <div className = 'underline'></div>
      </div>
      <div className = 'inputs'>
        <div className='input'>
          <img src={mail_icon} alt=''/>
          <input placeholder='Email' type='email' name='email' id='email' onChange={handleChange}/>
        </div>
        <div className='input'>
          <img src={password_icon} alt=''/>
          <input placeholder='Password' type='password' name='password' id='password' onChange={handleChange}/>
        </div>  
      </div>
      <div className ='forgot-password'>Forgot Password?<span>Click here.</span></div>
      <div className ='submit'>
        <button className = 'submission' onClick={handleSubmit}>Login</button>
        <div><Link className = 'submission' to = '/Registration'>Sign Up</Link></div>
      </div>
    </div>
  )
}




export default Login