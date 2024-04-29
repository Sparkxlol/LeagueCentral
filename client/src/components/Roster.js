import React from "react";

function Roster(props) {
    return (
        <div className="nameList">
            {props.firstName}   {props.lastName}
        </div>
    )
}

export default Roster;