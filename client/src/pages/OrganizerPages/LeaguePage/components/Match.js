import React from 'react'
import { Link } from 'react-router-dom'
import {useState, useEffect} from 'react'

// Props includes match and teams w/ players
function Match(props) {
    const match = props.match;
    const teams = props.teams;

    console.log(teams);

    return (
        <div className='section'>
            <div className='row'>
                <div>
                    hi
                </div>
                <div>
                    hi
                </div>
                <div>
                    hi
                </div>
            </div>
        </div>
    )
}

export default Match;