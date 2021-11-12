import React from 'react'

import './App.css';
import Home from './components/Home/home.component';
import Nav from './components/Navigation/nav.component'
import Login from './components/Login/login.component'
import Register from './components/Register/register.component'
import Profile from './components/Profile/profile.component'
import Lobby from './components/Lobby/lobby.component.jsx'
import Pastgames from './components/Pastgames/pastgames.component'
import Inbox from './components/Inbox/inbox.component'


import {BrowserRouter, Route, Switch} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav/>

        
          <Switch>
            <div className="auth-wrapper">
              <Route exact path="/" component={Home}/>
              <Route exact path="/profile" component={Profile}/>
              <Route exact path="/lobby" component={Lobby}/>
              <Route exact path="/pastgames" component={Pastgames}/>
              <Route exact path="/inbox" component={Inbox}/>
              <Route exact path="/login" component={Login}/>
              <Route exact path="/register" component={Register}/>
              
            </div>
          </Switch>
          

      </div>
    </BrowserRouter>
    
  );
}

export default App;
