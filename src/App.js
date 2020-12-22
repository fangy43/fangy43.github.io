import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigation } from './components/Navigation';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { Projects } from './pages/Projects/Projects'
import { Profile } from './pages/Profile/Profile'
import { Contact } from './pages/Contact/Contact'

//import { Button } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <div id='stars2'></div>
      <div id='stars3'></div>
      <BrowserRouter basename = '/fangy43.github.io'>
        <Navigation />
        <Switch>
        <Route exact path="/" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/profile" component={Profile} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;


