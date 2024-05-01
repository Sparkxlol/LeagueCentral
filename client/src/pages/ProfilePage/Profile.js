import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {  useParams } from 'react-router-dom';
import user_icon from '../../Assets/person.png';

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

    return (
        <div>
            Profile
        </div>
    )
}

export default Profile;
