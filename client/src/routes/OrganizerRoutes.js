import React from 'react';
import { Route, Routes } from 'react-router-dom';
import League from '../pages/OrganizerPages/LeaguePage/League';
import CreateLeague from '../pages/OrganizerPages/LeaguePage/Create';
import CreateMatch from '../pages/OrganizerPages/MatchPage/Create';
import EditMatch from '../pages/OrganizerPages/MatchPage/Edit';
import Organization from '../pages/OrganizerPages/OrganizationPage/Organization';

const OrganizerRoutes = () => {
    return (
        <Routes>
            <Route path='/league/create/:id' element={<CreateLeague />} />
            <Route path='/league/:id' element={<League />} />
            <Route path='/match/create/:id' element={<CreateMatch />} />
            <Route path='/match/edit/:id' element={<EditMatch />} />
            <Route path='/:id' element={<Organization />} />
        </Routes>
    )
}

export default OrganizerRoutes;