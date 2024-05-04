import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Create() {
    const { id } = useParams();
    let navigate = useNavigate();

    const [teams, setTeams] = useState([]);

    const [details, setDetails] = useState({
        team1: '',
        team2: '',
        team1Score: '0',
        team2Score: '0',
        date: '',
        league: id
    });

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const teamsRes = await axios.get(`/api/leagues/teams/${id}`);
            setTeams(teamsRes.data);

            setDetails({
                ...details,
                team1: teamsRes.data[0]._id,
                team2: teamsRes.data[0]._id
            })

            setLoading(false);
        }

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>
    }

    function handleChange(event) {
        setDetails((prev) => {
            return { ...prev, [event.target.name]: event.target.value }
        })
    }

    async function handleSubmit(event) {
        event.preventDefault();

        handleChange(event);

        const requestBody = details;

        await axios.post('/api/matches/', requestBody).then((res) => {
            console.log(res.status, res.data);
        })

        navigate(`../league/${id}`);
    }
    
    return (
        <div className='login'>
            <div className='header'>
                <div className='text'>Create Match:</div>
            </div>
            <div className='inputs'>
                <div className='input'>
                    <select name='team1' onChange={handleChange}>
                        {teams.map((team2, index) => (
                            <option key={index} value={team2._id}>{team2.name}</option>
                        ))}
                    </select>
                </div>
                <div className='input'>
                    <select name='team2' onChange={handleChange}>
                        {teams.map((team2, index) => (
                            <option key={index} value={team2._id}>{team2.name}</option>
                        ))}
                    </select>
                </div>
                <div className='input'>
                    <input placeholder="Team 1's Score" type='number' id='team1Score' name='team1Score' onChange={handleChange}></input>
                </div>
                <div className='input'>
                    <input placeholder="Team 2's Score" type='number' id='team2Score' name='team2Score' onChange={handleChange}></input>
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
                <button className='cancel' onClick={() => { navigate(`../league/${id}`) }}>Cancel</button>
            </div>
        </div>
    );
}

export default Create;