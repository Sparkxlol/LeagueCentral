import axios from 'axios';
import React, { useState, useEffect } from 'react'
import {  useParams } from 'react-router-dom'

function League() {
    const { id } = useParams();

    return (
        <div>Create</div>
    )
}

export default League;