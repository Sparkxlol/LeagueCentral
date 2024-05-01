import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {  useParams } from 'react-router-dom';
import user_icon from '../../Assets/person.png';

function Profile() {
    const { profileID } = useParams();

    const [user, setUser] = useState('');
    const [teams, setTeams] = useState('');

    const [loading, setLoading] = useState('')

    useEffect (() => {
        const fetchData = async () => {
            setUser(await axios.get(`/api/users/${profileID}`));
            setTeams(await axios.get(`/api/users/teams/${profileID}`));

            setLoading(false);
        }

        fetchData();
    }, [profileID]);

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
