import React, { useState, useEffect } from 'react'
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

    const [sports, setSports] = useState('');

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const sportRes = await axios.get(`/api/sports/`);
            setSports(sportRes.data.map(obj => { return { id: obj._id, name: obj.name } }));

            setDetails({
                ...details,
                sport: sportRes.data[0]._id
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

    function handleSubmit(event) {
        event.preventDefault();

        handleChange(event);

        const requestBody = details;

        axios.post('/api/leagues/', requestBody).then((res) => {
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
                    <select name='sport' onChange={handleChange}>
                        {sports.map((sport, index) => (
                            <option key={index} value={sport.id}>{sport.name}</option>
                        ))}
                    </select>
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