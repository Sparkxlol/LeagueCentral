import React from 'react'
import { useLocation } from 'react-router-dom'

function Match() {

  const location = useLocation()
  const {sport} = location.state


  return (
    <div className='match'>
      <h1>Sport Name</h1>
      <ul>
        <li className='first'>
          <h1>Descirpton</h1>
          <p>Sport informationdsfgsakhgadflkghfdsklgjhdsgklj gfdkjlghdsjkhlgdfsjg dfshgjkfdhsgkldsfh</p>
        </li>
        
        <li>
          <h1>{sport}</h1>
          <p>Sport informationdsfgsakhgadflkghfdsklgjhdsgklj gfdkjlghdsjkhlgdfsjg dfshgjkfdhsgkldsfh</p>
        </li>
      </ul>
    </div>
  )
}



export default Match
