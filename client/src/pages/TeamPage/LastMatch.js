import React from 'react'
import './Team.css'
import user_icon from '../../Assets/person.png'
const {DateTime} = require('luxon')


function LastMatch(props) {

    let opponent = null
    let dt = null
    let didWin;
    const lastMatch = props.lMatch
    const id = props.pid
    const team = props.pTeam

    if(lastMatch) {
        console.log(lastMatch)
    
        opponent = lastMatch.teams[0]._id !== id ? lastMatch.teams[0] : lastMatch.teams[1];
      
        dt = DateTime.fromISO(lastMatch.date);
      
      
        
        if((lastMatch.teams[0]._id === id) && (lastMatch.team1Score > lastMatch.team2Score)) {
          didWin = true;
        }
        else if((lastMatch.teams[0]._id === id) && (lastMatch.team1Score < lastMatch.team2Score)) {
          didWin = false;
        }
        else if((lastMatch.teams[1]._id === id) && (lastMatch.team2Score > lastMatch.team1Score)) {
          didWin = true;
        }
        else if((lastMatch.teams[1]._id === id) && (lastMatch.team2Score < lastMatch.team1Score)) {
          didWin = false;
        }

  return (
    <div className='last-match'>
        <p className='last-match-header'>Last Match:</p>
        <div className='last-match-container'>
          <div className='teamz'>
            <img src={(team.picture) ? team.picture : user_icon} alt=''/>
            {team.name}
          </div>
          <div>
          <div className='scoreDisplay' >
            {didWin ? <p className='w'>W</p> : <p className='l'>L</p>}
              <p className='theScore'>
                <p>: </p>
                <p>{lastMatch.teams[0]._id === id ? lastMatch.team1Score : lastMatch.team2Score}</p>
                <p>-</p>
                <p>{lastMatch.teams[0]._id === id ? lastMatch.team2Score : lastMatch.team1Score}</p>
            </p>
            </div> 
            <p className='vs'>VS</p>
            <p className='date'>{dt.toLocaleString(DateTime.DATETIME_SHORT)}</p>
          </div>
          <div className='teamz'>
            {opponent.name}
            <img src={(opponent.picture) ? opponent.picture : user_icon} alt=''/>
          </div>
        </div>
      </div>
  )
    } else {
        return (
            <></>
        )
    }
}

export default LastMatch
