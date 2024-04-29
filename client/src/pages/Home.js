import React from "react";
import { Fragment } from "react";
import { useEffect, useState } from "react";
import { createBrowserRouter, Route, RouterProvider, Routes} from 'react-router-dom'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import Match from "./MatchPage/Match";
import axios from 'axios'
import ActiveSport from "../components/activeSport";




const Home = (props) => {

    {/* <li><Link to='/Match' state={{ sport: 'basketball'}}>BasketBall</Link></li> */}

    {/*Get number of active sports */}
    
    
    // const getActiveSports = () =>{
        
    //     axios.get('/api/leagues/active').then(
    //         res=>{
    //             arrayReturn = res.data
                
    //         }
    //     )
    //     return arrayReturn
        
    // }

    const [sports, setSports] = useState('')
    useEffect(() => {
        axios.get('/api/leagues/active').then(
          res => {
            setSports(res.data);
            console.log('im here')
            console.log(sports);
          }
        );

    }, []);

    
    return (
        <Fragment>
           <div className="homepage">
            
                <div className="header">Active Sports
                <div className="underline"></div>
                </div>
                <div className="sections">
                    <ActiveSport arr={sports}/>
                </div>
           </div>
        </Fragment>
    )
}




export default Home