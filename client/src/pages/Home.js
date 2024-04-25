import React from "react";
import { Fragment } from "react";
import { useEffect, useState } from "react";
import { createBrowserRouter, Route, RouterProvider, Routes} from 'react-router-dom'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import Match from "./Match";
import axios from 'axios'





const Home = (props) => {

    {/* <li><Link to='/Match' state={{ sport: 'basketball'}}>BasketBall</Link></li> */}

    {/*Get number of active sports */}

    const [sports, setSports] =useState('')
    const getActiveSports = () =>{
        axios.get('/api/leagues/active').then(
            res=>{
                {/* setSports(res.data)*/}
                console.log(res.data)
            }
        )
    }

    getActiveSports()
    return (
        <Fragment>
           <div className="homepage">
                <div className="header">Active Sports</div>
                <div className="sections">
                    <div className="section">
                        Football
                    </div>
                    <div className="section">BasketBall</div>
                    {/* {sports.map(sport => (
                        <div className="section" key={sport.id}>
                            {sport.name}
                        </div>
                    ))}  */}
                </div>
           </div>
        </Fragment>
    )
}




export default Home