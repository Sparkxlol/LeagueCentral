import React, { useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Create() {
    const { id } = useParams();
    let navigate = useNavigate();

    const [details, setDetails] = useState({
        sport: '',
        startDate: '',
        endDate: '',
        organization: id
    });

    function handleChange(event) {
        const value = event.target.value;

        setDetails({
            ...details,
            [event.target.name]: value
        })
    }

    function handleSubmit(event) {
        event.preventDefault();

        axios.post('/api/leagues/', details).then((res) => {
            console.log(res.status, res.data);
        })
    }

    return (
        <div className='login'>
            <div className='header'>
                <div className='text'>Create League:</div>
            </div>
            <div className='inputs'>
                <div className='input'>
                    <input placeholder='Sport ID' type='text' id='sport' name='sport' onChange={handleChange}/>
                </div>
                <div className='input'>
                    <label htmlFor="startdate">Start date:</label>
                    <input type='date' id='startDate' name='startDate' onChange={handleChange}/>
                </div>
                <div className='input'>
                    <label htmlFor="endDate">End date:</label>
                    <input type='date' id='endDate' name='endDate' onChange={handleChange}/>
                </div>
            </div>
            <div className='submit'>
                <button className='submission' onClick={handleSubmit}>Create</button>
            </div>
            <div className='cancelContainer'>
                <button className='cancel' onClick={() => { navigate(`../league/${id}`) }}>Cancel</button>
            </div>
        </div>
    );
}

export default Create;