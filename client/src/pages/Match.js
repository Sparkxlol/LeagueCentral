import axios from 'axios';
import React, { useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'

function Match() {

  // const location = useLocation()
  // const {sport} = location.state


//   return (
//     <div className='match'>
//       <h1>Sport Name</h1>
//       <ul>
//         <li className='first'>
//           <h1>Descirpton</h1>
//           <p>Sport informationdsfgsakhgadflkghfdsklgjhdsgklj gfdkjlghdsjkhlgdfsjg dfshgjkfdhsgkldsfh</p>
//         </li>
        
//         <li>
//           <h1>{sport}</h1>
//           <p>Sport informationdsfgsakhgadflkghfdsklgjhdsgklj gfdkjlghdsjkhlgdfsjg dfshgjkfdhsgkldsfh</p>
//         </li>
//       </ul>
//     </div>
//   )
// 

const[match, setMatch] = useState('');
const { matchID } = useParams();
const getMatch = () => {
  axios.get('api/matches', {
    params: matchID
  }).then(
    res => {
      setMatch(res.data);
      console.log(res.data);
    }
  )
}

const [team, setTeam] = useState('');
const getTeam = () => {
  axios.get('api/matches/team', {
    params: {
      id: ''
    }
  }).then(
    res => {
      setTeam(res.data);
      console.log(res.data);
    }
  )
}

getTeam()
return (


  <div className='container1'>
    <div className='match-info'>
      Stankowski Field
    </div>
  </div>
)


}





export default Match
