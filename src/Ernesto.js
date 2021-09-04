/*import logo from './logo.svg';*/
import './App.css';
import React from 'react';
import {Link } from "react-router-dom";

function Ernesto() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        
      

        <h1>
         Welcome to Ernesto's page
        </h1>
        <p style={{fontSize: '22px'}}>
          I am a Senior at FAU studying Computer Science expecting to graduate after Spring 2022
        </p>

        <Link to="/Home"><button style={{height: '30px', width : '100px'}}>Homepage</button></Link>
        
        
      


      </header>
    </div>
  );
}

export default Ernesto;
