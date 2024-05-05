import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Match from './components/Match';
const {DateTime} = require('luxon')

function League() {
    const { id } = useParams();

    const [league, setLeague] = useState('');
    const [matches, setMatches] = useState('');
    const [index, setIndex] = useState(0);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const leagueRes = await axios.get(`/api/leagues/${id}`);
            setLeague(leagueRes.data);

            const matchRes = await axios.get(`/api/leagues/matches/complete/${id}`);
            setMatches(matchRes.data);

            setLoading(false);
        }

        fetchData();
    }, [])

    if (loading) {
        return <div>Loading...</div>
    }

    let currentMatches = [];
    for (let i = index; i < index + 10; i++) {
        if (matches.length > i)
            currentMatches.push(<Match match={matches[i]} teams={matches[i].teams}/>);
    }

    const changeIndex = (newIndex) => {
        if (newIndex >= 0 && newIndex < matches.length)
            setIndex(newIndex);
    }

    const startDate = DateTime.fromISO(league.startDate);
    const endDate = DateTime.fromISO(league.endDate);

    const createLink = "../match/create/" + id;
    const returnLink = "../" + league.organization;

    return (
        <div className='homepage'>
            <div className='header'>
                <div>
                    {league.sport.name}
                </div>
            </div>
            <div class='subheader'>
                {startDate.toLocaleString(DateTime.DATETIME_SHORT)} - {endDate.toLocaleString(DateTime.DATETIME_SHORT)}
            </div>
            <div className='row subheader'>
                <div><Link to={createLink}>Create Match</Link></div>
            </div>
            <div className='sections'>
                {currentMatches}
            </div>
            <div className='row subheader'>
                <button onClick={() => changeIndex(index - 10)}>Prev</button>
                <div><Link to={returnLink}>Return</Link></div>
                <button onClick={() => changeIndex(index + 10)}>Next</button>
            </div>
        </div>
    )
}

export default League;