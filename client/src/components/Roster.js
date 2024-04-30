import React from "react";

function Roster(props) {
    return (
        <div className="nameList">
            <img src = {props.profilePicture}/> {props.firstName} {props.lastName}
        </div>
    )
}

export default Roster;