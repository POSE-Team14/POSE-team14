/*import logo from './logo.svg';*/
import './App.css';

import React from 'react';
import {Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>
          Welcome to team 14 homepage
        </h1>
        
      
       
        {/* <button style={{height: '30px', width : '200px'}}><Link to="/Ernesto">Ernesto!</Link></button> */}
        
          
        

          <Link to="/Ernesto"><button style={{height: '30px', width : '200px', margin: '5px'}}>Ernesto</button></Link>
          <Link to="/Andres"><button style={{height: '30px', width : '200px', margin: '5px'}}>Andres</button></Link>
          <Link to="/Ahmad"><button style={{height: '30px', width : '200px', margin: '5px'}}>Ahmad</button></Link>
          <Link to="/Charles"><button style={{height: '30px', width : '200px', margin: '5px'}}>Charles</button></Link>
          <Link to="/John"><button style={{height: '30px', width : '200px', margin: '5px'}}>John</button></Link>
          
        
       

      

      </header>
    </div>
  );
}

export default App;
