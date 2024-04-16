import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import React from 'react';
import { useEffect, useState } from 'react';

function App() {

  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchMessage = async () => {
      const response = await fetch('http://localhost:3001/message');
      const data = await response.json();
      setMessage(data);
  }
  
  fetchMessage();
  }, []);

  return (
    <div>
      {message}
    </div>
  );
  
}

export default App;
