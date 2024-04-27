import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import React, { Fragment } from 'react';
import { useEffect, useState } from 'react';
import { createBrowserRouter, Route, RouterProvider, Routes} from 'react-router-dom'
import League from './pages/League';
import Login from './pages/LoginPage/Login';
import Match from './pages/MatchPage/Match';
import Profile from './pages/Profile';
import ProfileInfo from './pages/ProfileInfo';
import ProfileSchedule from './pages/ProfileSchedule';
import Registration from './pages/RegistrationPage/Registration';
import Team from './pages/Team';
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
          <Route path='/' element={<Home />} />
          <Route path='/league' element={<League />} />
          <Route path='/login' element={<Login />} />
          <Route path='/match/:matchID' element={<Match />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/profileInfo' element={<ProfileInfo />} />
          <Route path='/profileSchedule' element={<ProfileSchedule />} />
          <Route path='/registration' element={<Registration />} />
          <Route path='/team' element={<Team />} />
          <Route path='/teamInvite' element={<TeamInvite />} />
          <Route path='/tournament' element={<Tournament />} />
          <Route path='/tournamentBracket' element={<TournamentBracket />} />
          <Route path='/tournamentSchedule' element={<TournamentSchedule />} />
        </Routes>
      </div>
    </Fragment>
  );
  
}

export default App;
