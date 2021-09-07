import logo from './logo.svg';
import './App.css';
import Charles from './Images/charles.jpg';

function Charles() {
  return (
    <div className="App">
      <header className="App-header">
        

        <body>
        <h1>
          Welcome to Charles Pyfrom's Page
        </h1>

        <img style={{height: '300px',width: '300px'}}src={charles} alt='Charles'/>

        <p style={{fontSize: '15px'}}>
        Hello everyone! My name is Charles Pyfrom and I am currently working on my bachelor's in Computer Engineering at FAU 
        and I am expected to graduate next summer. My hobbies arre playing video games, watching anime, and playing basketball/football
        with my friends. My goal in life is to one design and build the next generation of technology.
        </p>
        
        </body>

        <Link to="/"><button style={{height: '30px', width : '100px'}}>Homepage</button></Link>
      </header>
    </div>
  );
}

export default Charles;
