import logo from './logo.svg';
import './App.css';
import './App.js';
import john from './Images/JohnS.jpg';
import {Link } from "react-router-dom";

function John() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          John Serrano
        </h1>
        <img style={{height: '400px',width: '400px'}}src={john} alt='john'/>
       <h2>
       About me
       </h2>
       
        <p>
        I am currently a senior pursuing my bachelor's in Computer Engineering at FAU. I like to play Video games in the 
         spare time that I have. I also enjoy reading as well and have developed a big mystery kick here lately.
          Beyond that I'm working to expand my programming skills and teaching myself things outside of class. I'm currently sceduled to graduate in spring 2022.

        </p>
        
        <Link to="/">
          <button style={{height: '30px', width: '100px'}}>Homepage</button>
        </Link>


      </header>
    </div>
  );
}

export default John;
