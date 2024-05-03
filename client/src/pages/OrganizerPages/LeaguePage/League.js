import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

function League() {
    const { id } = useParams();

    return (
        <div>
            <Link to={`../league/create/${id}`}>Create</Link>
        </div>
    )
}

export default League;