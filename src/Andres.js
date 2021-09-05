import './App.css';
import andres from './Images/andres.jpg';
import {Link } from "react-router-dom";

function Andres() {
  return (
    <div className="App">
      <header className="App-header">
       

        <img style={{height: '400px',width: '400px'}}src={andres} alt='Andres'/>
        <h1>
          Andres Botia
        </h1>
        
      <p style={{fontSize: '20px'}}>I'm currently a Senior Computer Science Major, at Florida Atlantic University. My expected graduation is set to spring 2022. 
        Over the summer I was able to have an internship with FootLocker as a software engineer intern and worked on a full stack application for them.
        I've worked with projects mainly with C,C++,java, and javascript. Besides school, I enjoy working out and practice Brazilian Jiu-Jitsu on a weekly basis.
      </p>
      
          

      <Link to="/"><button style={{height: '30px', width : '100px'}}>Homepage</button></Link>  
      </header>
    </div>
  );
}

export default Andres;
