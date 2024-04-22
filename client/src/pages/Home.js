import React from "react";
import { Fragment } from "react";
import { useEffect, useState } from "react";
import { createBrowserRouter, Route, RouterProvider, Routes} from 'react-router-dom'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import Match from "./Match";



const Home = () => {

    

    return (
        <Fragment>
            <div className="homePage">
                <h1 className="h1">University of Mid</h1>
                    <ul className="ul">
                        <p className="p">Active Sports</p>
                        <li className="li">HIGIGIGIGIGIGIGIGIGIGIGIGGGGGGGGGGGGGGGGGGGGGGG GGGGGGGGGGGGGGGGGGGG GGGGGGGGGGGGGGGGGGG</li>
                        <li className="li"><Link to='/Match' state={{ sport: 'basketball'}}>BasketBall</Link></li>
                    </ul>
            </div>
        </Fragment>
    )
}




export default Home