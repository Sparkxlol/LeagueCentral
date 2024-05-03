import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';

function OrgList(props) {

    const [orgs, setOrgs] = useState('')
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const fetchData = async () => {
          const res = await axios.get(`/api/organizations/`)
            setOrgs(res.data)
            console.log(res.data)
          setLoading(false)
        }
        fetchData()
      }, []);
    
      if (loading) {
        return <div className='loading'>Loading...</div>
      }

      

    const orgArray = []
    for(let i = 0; i < orgs.length; i++){
        orgArray.push(<option value={orgs[i]._id} name='organization' id='organization' onChange={props.fun}>{orgs[i].name}</option>)
    }

  return (
    <>{orgArray}</>
    
  )
}

export default OrgList
