import React from "react";
import { Fragment } from "react";
import {  useParams } from 'react-router-dom'
import { useEffect, useState } from "react";
import axios from 'axios'
import ActiveSport from './components/ActiveSport'

const Home = (props) => {
    const { id } = useParams();

    const [org, setOrg] = useState('');
    const [sports, setSports] = useState('');

    const [loading, setLoading] = useState('');

    useEffect(() => {
      const fetchData = async () => {
        const orgRes = await axios.get(`/api/organizations/${id}`)
        setOrg(orgRes.data);

        const sportsRes = await axios.get(`/api/leagues/active/${id}`);
        setSports(sportsRes.data);

        setLoading(false);
      }

      fetchData();
    }, []);

    if (loading) {
      return <div>Loading...</div>
    }
    
    return (
        <Fragment>
          <div className="homepage">
            <div className="header">
              <div className="row">
                {org.picture && <img src = {org.picture}/>}
                <div>{org.name}</div>
              </div>
            </div>
            <div className="subheader">{org.address}</div>
          </div>
          <div className="homepage">
            <div className="header">
              <div>Active Sports</div>
              <div className="underline"></div>
            </div>
            <div className="sections">
              <ActiveSport sports={sports}/>
            </div>
          </div>
          <div className="homepage">
            <div className="subheader">Contact</div>
            <div className="row">
              <div>{org.email}</div>
              <div>{org.phone}</div>
            </div>
          </div>
        </Fragment>
    )
}




export default Home