import React from 'react';
import logo from './assets/images/logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './components/home';
import State from './components/state';
import District from './components/district';
import About from './components/about';

function App() {
  return (
    <Router>
    <div className="App">
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <a href="/home" className="navbar-brand">
            <img src={logo} height="28" alt="CoolBrand" />
            <span className="pl-3">Covid 19 - India Tracker</span>
        </a>
        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav text-left">
              <li data-toggle="collapse" data-target=".navbar-collapse.show">
                <Link to="/home" className="nav-item nav-link active">Home</Link>
              </li>
              <li data-toggle="collapse" data-target=".navbar-collapse.show">
                <Link to="/state" className="nav-item nav-link active" >State Data</Link>
              </li>
              <li data-toggle="collapse" data-target=".navbar-collapse.show">
                <Link to="/district" className="nav-item nav-link active">District Data</Link>
              </li> 
              <li data-toggle="collapse" data-target=".navbar-collapse.show">
                <Link to="/about" className="nav-item nav-link active">About</Link>
              </li>             
            </div>
            <div className="navbar-nav ml-auto">
            </div>
        </div>
    </nav>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/home" component={Home}></Route>
        <Route exact path="/state" component={State}></Route>
        <Route exact path="/district" component={District}></Route>
        <Route exact path="/about" component={About}></Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
