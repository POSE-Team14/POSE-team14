import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Ernesto from './Ernesto';
import Andres from './Andres';
import Ahmad from './Ahmad';
import Charles from './Charles';
import John from './John';
import { BrowserRouter, Route, Switch } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>


  <Switch>
    <Route exact strict path="/Home" component={App} />
    <Route path="/Ernesto" component={Ernesto} />
    <Route path="/Andres" component={Andres} />
    <Route path="/Ahmad" component={Ahmad} />
    <Route path="/Charles" component={Charles} />
    <Route path="/John" component={John} />
    
  </Switch>




  <React.StrictMode>
    <App />
  </React.StrictMode>

  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
