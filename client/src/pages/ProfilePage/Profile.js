import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {  useParams } from 'react-router-dom';
import user_icon from '../../Assets/person.png';
import edit_icon from '../../Assets/edit.png'
import './Profile.css'
import { Link } from 'react-router-dom';

function Profile() {
    const { id } = useParams();

    const [user, setUser] = useState('');
    const [teams, setTeams] = useState('');
    const [org, setOrg] = useState('')

    const [loading, setLoading] = useState(true)

    console.log('hallo')
    useEffect (() => {
        const fetchData = async () => {
            const userRes = await axios.get(`/api/users/${id}`);
            setUser(userRes.data);
            console.log(userRes.data)
            console.log('user')
            const teamsRes = await axios.get(`/api/users/teams/${id}`);
            setTeams(teamsRes.data);
            console.log('team')
            console.log(teamsRes.data)
            const orgRes = await axios.get(`/api/organizations/${userRes.data.organization}`)
            setOrg(orgRes.data)
            console.log(orgRes.data)
            console.log('org')

        setLoading(false);
        }

        fetchData();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>
    }
    console.log('win')
    console.log(user)
    const activeTeams = []
    
    for(let i = 0; i < teams.length; i++) {
        const link = '/team/' + teams[i]._id
        activeTeams.push(<Link to={link}>{teams[i].name}</Link>)
    }

    const orgLink = '/' + user.organization

    const profileTitle = user.firstName + ' ' + user.lastName + "'s Profile"
    return (
        <div className='profileBackground'>
            <div className='profile-header'>    
                <img src= {(user.profilePicture) ? user.profilePicture : user_icon} alt = ''/> 
                {profileTitle}
            </div>
            <div className='editInputs'><p className='userInfo'>Email: {user.email}</p></div>
            <div className='editInputs'><p className='userInfo'>Phone: {user.phone}</p></div>
            <div className='editInputs'><p className='userInfo'>Username: {user.userName}</p></div>
            <div className='editInputs'><p className='userInfo'>Password: {}</p></div>
            <div className='editInputs'><p className='userInfo'>Email: {user.email}</p></div>
            <div className='editInputs'><p className='userInfo'>Organization: <Link to={orgLink}>{org.name}</Link></p></div>
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
