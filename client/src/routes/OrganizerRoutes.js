import React from 'react';
import { Route, Routes } from 'react-router-dom';
import League from '../pages/OrganizerPages/LeaguePage/League';
import CreateLeague from '../pages/OrganizerPages/LeaguePage/Create';
import Match from '../pages/OrganizerPages/MatchPage/Match';
import Organization from '../pages/OrganizerPages/OrganizationPage/Organization';

const OrganizerRoutes = () => {
    return (
        <Routes>
            <Route path='/league/create/:id' element={<CreateLeague />} />
            <Route path='/league/:id' element={<League />} />
            <Route path='/match/:id' element={<Match />} />
            <Route path='/organization/:id' element={<Organization />} />
        </Routes>
    )
}

export default OrganizerRoutes;