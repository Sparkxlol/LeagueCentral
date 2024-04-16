import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import React from 'react';
import { useEffect, useState } from 'react';

function App() {
  console.log('fetching');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchMessage = async () => {
      const response = await fetch('/message');
      const data = await response.text();
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
