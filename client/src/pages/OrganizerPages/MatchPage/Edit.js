import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { DateTime } from 'luxon';

function Edit() {
    const { id } = useParams();
    let navigate = useNavigate();

    const [teams, setTeams] = useState([]);
    const [league, setLeague] = useState('');

    const [details, setDetails] = useState({
        team1: '',
        team2: '',
        team1Score: '0',
        team2Score: '0',
        date: '',
        league: ''
    });

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const matchRes = await axios.get(`/api/matches/${id}`);
            const match = matchRes.data;

            const teamsRes = await axios.get(`/api/leagues/teams/${match.league}`);
            setTeams(teamsRes.data);
            
            setDetails({
                team1: match.teams[0],
                team2: match.teams[1],
                team1Score: match.team1Score,
                team2Score: match.team2Score,
                date: match.date,
                league: match.league
            });

            setLeague(match.league);

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

        requestBody.teams = [requestBody.team1, requestBody.team2];
        delete requestBody.team1;
        delete requestBody.team2;

        await axios.patch(`/api/matches/${id}`, requestBody).then((res) => {
            console.log(res.status, res.data);
        })

        navigate(`../league/${league}`);
    }

    const dt = DateTime.fromISO(details.date);
    
    return (
        <div className='login'>
            <div className='header'>
                <div className='text'>Edit Match:</div>
            </div>
            <div className='inputs'>
                <div className='input'>
                    <select name='team1' onChange={handleChange}>
                        {teams.map((team1, index) => (
                            <option key={index} value={team1._id} selected={team1._id === details.team1}>{team1.name}</option>
                        ))}
                    </select>
                </div>
                <div className='input'>
                    <select name='team2' onChange={handleChange}>
                        {teams.map((team2, index) => (
                            <option key={index} value={team2._id} selected={team2._id === details.team2}>{team2.name}</option>
                        ))}
                    </select>
                </div>
                <div className='input'>
                    <input placeholder={details.team1Score} type='number' id='team1Score' name='team1Score' onChange={handleChange}></input>
                </div>
                <div className='input'>
                    <input placeholder={details.team2Score} type='number' id='team2Score' name='team2Score' onChange={handleChange}></input>
                </div>
                <div className='input'>
                    <label htmlFor="date">Start date:</label>
                    <input type='date' value={dt.toFormat("yyyy-MM-dd")} id='date' name='date' onChange={handleChange}/>
                </div>
            </div>
            <div className='submit'>
                <button className='submission' onClick={handleSubmit}>Edit</button>
            </div>
            <div className='cancelContainer'>
                <button className='cancel' onClick={() => { navigate(`../league/${league}`) }}>Cancel</button>
            </div>
        </div>
    );
}

export default Edit;