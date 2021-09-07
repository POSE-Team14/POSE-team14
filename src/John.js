import './App.css';
import {Link } from "react-router-dom";

function John() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          John Serrano
        </h1>
       <h2>
       About me
       </h2>
       
        <p>
         I am currently a senior pursuing my bachelor's in Computer Engineering at FAU. I like to play Video games in the 
         spare time that I have. I also enjoy reading as well, and have develped a big mystery kick here lately.
          Beyond that I'm working to expand my programming skills, and teaching myself things outside of class. I'm currently sceduled to graduat in spring 2022.
        </p>
        
        <Link to="/">
          <button style={{height: '30px', width: '100px'}}>Homepage</button>
        </Link>

        
      </header>
    </div>
  );
}

export default John;
