import React from 'react';
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useTheme } from "emotion-theming";
import logo from './assets/images/logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './components/home';
import State from './components/state';
import District from './components/district';
import VVCMC from './components/vasai_virar';
import About from './components/about';

function App({ isDark, setIsDark }) {
  const theme = useTheme();
  document.body.classList.value= theme.bodyBg;

  return (
    <Router>
    <div className="App"
        css={css`
          color: ${theme.text};
          text-align: center;
          transition-duration: 0.2s;
          transition-property: background-color, color;
          height: 100%;
        `}
      >

      <nav className={"navbar navbar-expand-md "+theme.navbarConfig+" fixed-top"}>
        <Link to="/home" className="navbar-brand">
          <img src={logo} height="28" alt="CoolBrand" />
          <span className="pl-3">Covid 19 - India Tracker</span>
        </Link>
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
              <Link to="/vasai-virar-city" className="nav-item nav-link active">Vasai - Virar Data</Link>
            </li>
            <li data-toggle="collapse" data-target=".navbar-collapse.show">
              <Link to="/about" className="nav-item nav-link active">About</Link>
            </li>             
          </div>
          <div className="navbar-nav ml-auto">
          </div>
        </div>
      </nav>
      <br/><br/><br/>
      <button 
      css={css`
        border: 2px solid transparent;
        background-color: ${theme.buttonBg};
        color: ${theme.buttonText};
        font-size: 18px;
        transition-duration: 0.2s;
        transition-property: background-color, color;
        cursor: pointer;
        float:right;
        margin-right:20px;
        outline:none !important;
      `}
      onClick={() => {setIsDark(!isDark);}}>
      {isDark ? <i className="fa fa-sun-o text-warning"></i> : <i className="fa fa-moon-o text-dark"></i>}
    </button>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/home" render={() => <Home background={theme.bodyBg} />}></Route>
        <Route exact path="/state" render={() => <State tableConfig={theme.tableText} />}></Route>
        <Route exact path="/district" render={() => <District tableConfig={theme.tableTheme} background={theme.bodyBg} />}></Route>
        <Route exact path="/vasai-virar-city" render={() => <VVCMC tableConfig={theme.tableTheme} background={theme.bodyBg} />}></Route>
        <Route exact path="/about" render={() => <About tableConfig={theme.tableTheme} background={theme.bodyBg} />}></Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
