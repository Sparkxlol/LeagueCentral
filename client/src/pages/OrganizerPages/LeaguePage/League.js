import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Match from './components/Match';
import TeamLeagueDisplay from '../../LeaguePage/TeamLeagueDisplay';

function League() {
    const { id } = useParams();

    const [matches, setMatches] = useState('');
    const [index, setIndex] = useState(0);

    const [loading, setLoading] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const matchRes = await axios.get(`/api/leagues/matches/${id}`);
            setMatches(matchRes.data);

            setLoading(false);
        }

        fetchData();
    }, [])

    if (loading) {
        return <div>Loading...</div>
    }

    console.log(matches);

    let currentMatches = [];
    for (let i = index; i < index + 10; i++) {
        if (matches.length > i)
            currentMatches.push(<Match match={matches[i]} teams={matches[i].teams}/>);
    }

    return (
        <div className='homepage'>
            <div className='subheader'>
                <Link to={`../league/create/${id}`}>Create</Link>
            </div>
            <div className='sections'>
                {currentMatches}
            </div>
        </div>
    )
}

export default League;