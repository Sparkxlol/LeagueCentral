import logo from './logo.svg';
import './App.css';
import Home from './pages/HomePage/Home';
import React, { Fragment } from 'react';
import { useEffect, useState } from 'react';
import { createBrowserRouter, Route, RouterProvider, Routes} from 'react-router-dom'
import League from './pages/LeaguePage/League';
import Login from './pages/LoginPage/Login';
import Match from './pages/MatchPage/Match';
import Profile from './pages/ProfilePage/Profile'
import Registration from './pages/RegistrationPage/Registration';
import Team from './pages/TeamPage/Team';
import Navbar from './components/Navbar';
import OrganizerRoutes from './routes/OrganizerRoutes';
import LeagueList from './pages/LeagueList/LeagueList';
import JoinTeam from './pages/JoinTeam/JoinTeam';
import CreateTeam from './pages/CreateTeamPage/CreateTeam';



function App() {
  // console.log('fetching');
  // const [message, setMessage] = useState('');

  // useEffect(() => {
  //   const fetchMessage = async () => {
  //     const response = await fetch('/message');
  //     const data = await response.text();
  //     setMessage(data);
  // }
  
  //   fetchMessage();
  // }, []);

  return (
    <Fragment>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path="/organizer/*" element={<OrganizerRoutes />} />
          <Route path='/LeagueList' element={<LeagueList />} />
          <Route path='/' element={<Login />} />
          <Route path='/JoinTeam/:id' element={<JoinTeam />}  />
          <Route path='/league/:id' element={<League />} />
          <Route path='/CreateTeam/:id' element={<CreateTeam />} />
          <Route path='/login' element={<Login />} />
          <Route path='/match/:matchID' element={<Match />} />
          <Route path='/profile/:id' element={<Profile />} />
          <Route path='/registration' element={<Registration />} />
          <Route path='/team/:id' element={<Team />} />
          {/* Keep this last */}
          <Route path='/:id' element={<Home />} /> 
        </Routes>
      </div>
    </Fragment>
  );
  
}

export default App;
