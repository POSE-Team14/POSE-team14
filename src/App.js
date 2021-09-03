import logo from './logo.svg';
import './App.css';

import React from 'react';
import {Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Welcome to team 14 homepage
        </h1>
        
        <Link to="/Ernesto">Ernesto!</Link>
        <Link to="/Andres">Andres!</Link>
        <Link to="/Ahmad">Ahmad!</Link>
        <Link to="/Charles">Charles!</Link>
        <Link to="/John">John!</Link>

       
      </header>
    </div>
  );
}

export default App;
