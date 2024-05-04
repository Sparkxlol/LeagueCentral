import React from "react";
import { Link } from "react-router-dom";

function Roster(props) {
    const userLink = '/Profile/' + props.id
    console.log(props)
    return (
        <div className="nameList">
            <img src = {props.profilePicture}/> <Link to={userLink}>{props.firstName} {props.lastName}</Link>
        </div>
    )
}

export default Roster;