import React from 'react'

function Login() {

  

  return (
    <div className='login'>
      <h1 className='h1'>Login</h1>
      <form className='form'>
        <label className='label' for='email'>Email:</label><br></br>
        <input type='text' id='email' name='email'></input><br></br>
        <label className='label' for='password'>Password:</label><br></br>
        <input type='text' id='password' name='password'></input><br></br>
      </form>
    </div>
  )
}

export default Login
