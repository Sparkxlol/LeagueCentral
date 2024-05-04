import axios from 'axios';
import React, { useState, useEffect } from 'react'
import {  useParams, Link } from 'react-router-dom'
import League from './components/League'

function Organization() {
    const { id } = useParams();

    const [org, setOrg] = useState('');
    const [leagues, setLeagues] = useState('');
    const [index, setIndex] = useState(0);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const orgRes = await axios.get(`/api/organizations/${id}`);
            setOrg(orgRes.data);

            const leagueRes = await axios.get(`/api/leagues/organization/${id}`);
            setLeagues(leagueRes.data);

            setLoading(false);
        }

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>
    }

    let currentLeagues = [];
    for (let i = index; i < index + 10; i++) {
        if (leagues.length > i)
            currentLeagues.push(<League league={leagues[i]} sport={leagues[i].sport}/>);
    }

    const createLink = "../league/create/" + id;

    return (
        <div className='homepage'>
            <div className='header'>
                <div>
                    {org.name}
                </div>
            </div>
            <div className='row subheader'>
                <div><Link to={createLink}>Create</Link></div>
            </div>
            <div className='sections'>
                {currentLeagues}
            </div>
        </div>
    )
}

export default Organization;