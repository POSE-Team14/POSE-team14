/*import logo from './logo.svg';*/
import './App.css';
import './Ernesto.css'
import React from 'react';
import {Link } from "react-router-dom";
import photo from './Images/e_image.jpg';

function Ernesto() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        
      

        <body>
        <img src={photo} className='photo' alt='headshot'/>
        <h1>
         Welcome to Ernesto's page
        </h1>
        <p className='bio'>
          I am a Senior at FAU studying Computer Science expecting to graduate after Spring 2022,
          I enjoy playing video games and traveling with close friends. I used to play the Cello for
          over 7 years and have recently made it a hobby of mine.
        </p>

        </body>

        <Link to="/"><button style={{height: '30px', width : '100px'}}>Homepage</button></Link>
        
        
      


      </header>
    </div>
  );
}

export default Ernesto;
