import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import './LeagueList.css'

function LeagueList() {

    const [orgs, setOrgs] = useState('')
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
          const res = await axios.get(`/api/organizations/`)
            setOrgs(res.data)
           
          setLoading(false)
        }
        fetchData()
      }, []);
    
      if (loading) {
        return <div className='loading'>Loading...</div>
      }


    const orgsArray = []
    for(let i = 0; i < orgs.length; i++) {
        const orgLink = '/' + orgs[i]._id
        orgsArray.push(<Link to={orgLink}>{orgs[i].name}</Link>)
    }

    

  return (
    <div className='orgContainer'>
        <div className='orgPageTitle'>Organizations</div>
        {orgsArray}
    </div>
  )
}

export default LeagueList
