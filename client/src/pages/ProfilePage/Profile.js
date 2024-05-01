import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

function Profile() {

  const location = useLocation()
  const {state} = location

  const user = state.user


  return (
    <>
      <div className='container1'>{user.firstName} {user.lastName}</div>
      
    </>
  )
}

export default Profile

