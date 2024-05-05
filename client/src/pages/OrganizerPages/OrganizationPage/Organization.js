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

    const changeIndex = (newIndex) => {
        if (newIndex >= 0 && newIndex < leagues.length)
            setIndex(newIndex);
    }

    const createLink = "../league/create/" + id;
    const returnLink = "../../" + id;

    return (
        <div className='homepage'>
            <div className='header'>
                <div>
                    {org.name}
                </div>
            </div>
            <div className='row subheader'>
                <div><Link to={createLink}>Create League</Link></div>
            </div>
            <div className='sections'>
                {currentLeagues}
            </div>
            <div className='row subheader'>
                <button onClick={() => changeIndex(index - 10)}>Prev</button>
                <div><Link to={returnLink}>Return</Link></div>
                <button onClick={() => changeIndex(index + 10)}>Next</button>
            </div>
        </div>
    )
}

export default Organization;