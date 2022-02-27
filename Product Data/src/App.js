import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Login from './Components/Login/login';
import React, {useState,useEffect} from 'react';
import { BrowserRouter as Router ,Route, Routes } from 'react-router-dom';

function App() {
  const [loggedIn,setLoggedIn]=useState(true);
  useEffect(()=>{
    const go = localStorage.getItem('login');
    if(go === 'True'){
      setLoggedIn(false)
    }
  },[]);
  return (

    <div className="App">
        <Router>
          {loggedIn ? (<Login setLoggedIn={setLoggedIn}/>):(<Dashboard/>)} 
      </Router>
    </div>
  );
}

export default App;
