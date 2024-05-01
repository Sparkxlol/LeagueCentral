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
import ProfileInfo from './pages/ProfileInfo';
import ProfileSchedule from './pages/ProfileSchedule';
import Registration from './pages/RegistrationPage/Registration';
import Team from './pages/TeamPage/Team';
import TeamInvite from './pages/TeamInvite';
import Tournament from './pages/Tournament';
import TournamentBracket from './pages/TournamentBracket';
import TournamentSchedule from './pages/TournamentSchedule';
import Navbar from './components/Navbar';



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
          <Route path='/' element={<Login />} />
          <Route path='/league/:id' element={<League />} />
          <Route path='/login' element={<Login />} />
          <Route path='/match/:matchID' element={<Match />} />
          <Route path='/profile/:id' element={<Profile />} />
          <Route path='/profileInfo/:id' element={<ProfileInfo />} />
          <Route path='/profileSchedule/:id' element={<ProfileSchedule />} />
          <Route path='/registration' element={<Registration />} />
          <Route path='/team/:id' element={<Team />} />
          <Route path='/teamInvite/:id' element={<TeamInvite />} />
          <Route path='/tournament/:id' element={<Tournament />} />
          <Route path='/tournamentBracket' element={<TournamentBracket />} />
          <Route path='/tournamentSchedule' element={<TournamentSchedule />} />
          <Route path='/:id' element={<Home />} />
        </Routes>
      </div>
    </Fragment>
  );
  
}

export default App;
