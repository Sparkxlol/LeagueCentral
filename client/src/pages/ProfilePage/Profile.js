import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {  useParams } from 'react-router-dom';
import user_icon from '../../Assets/person.png';
import './Profile.css'
import { Link } from 'react-router-dom';

function Profile() {
    const { id } = useParams();

    const [user, setUser] = useState('');
    const [teams, setTeams] = useState('');

    const [loading, setLoading] = useState('')

    useEffect (() => {
        const fetchData = async () => {
            const userRes = await axios.get(`/api/users/${id}`);
            setUser(userRes.data);

            const teamsRes = await axios.get(`/api/users/teams/${id}`);
            setTeams(teamsRes.data);

            setLoading(false);
        }

        fetchData();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>
    }


    const activeTeams = []
    
    for(let i = 0; i < teams.length; i++) {
        const link = '/team/' + teams[i]._id
        activeTeams.push(<Link to={link}>{teams[i].name}</Link>)
    }

    const profileTitle = user.firstName + ' ' + user.lastName + "'s Profile"
    return (
        <div className='profileBackground'>
            <img src= {(user.profilePicture) ? user.profilePicture : user_icon} alt = ''/> 
            
            <div className='name'>{profileTitle}</div>
            <div className='email'>Email: {user.email}</div>
            <div className='activeTeams'>
                Active Teams
            </div>
            <div className='teams'>
                    {activeTeams}
            </div>

        </div>
    )
}

export default Profile;
