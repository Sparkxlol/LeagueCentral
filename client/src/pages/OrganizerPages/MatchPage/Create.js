import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Create() {
    const { id } = useParams();
    let navigate = useNavigate();

    const [details, setDetails] = useState({
        team1Score: '0',
        team2Score: '0',
        date: '',
        league: id
    });

    function handleChange(event) {
        setDetails((prev) => {
            return { ...prev, [event.target.name]: event.target.value }
        })
    }

    function handleSubmit(event) {
        event.preventDefault();

        handleChange(event);

        const requestBody = details;

        axios.post('/api/matches/', requestBody).then((res) => {
            console.log(res.status, res.data);
        })
    }
    
    return (
        <div className='login'>
            <div className='header'>
                <div className='text'>Create League:</div>
            </div>
            <div className='inputs'>
                <div>
                    <input placeholder="Team 1's Score" type='number' id='team1Score' name='team1Score'></input>
                </div>
                <div>
                    <input placeholder="Team 2's Score" type='number' id='team2Score' name='team2Score'></input>
                </div>
                <div className='input'>
                    <label htmlFor="date">Start date:</label>
                    <input type='date' id='date' name='date' onChange={handleChange}/>
                </div>
            </div>
            <div className='submit'>
                <button className='submission' onClick={handleSubmit}>Create</button>
            </div>
            <div className='cancelContainer'>
                <button className='cancel' onClick={() => { navigate(`../match/${id}`) }}>Cancel</button>
            </div>
        </div>
    );
}

export default Create;