import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from "react";
import { ThemeProvider } from "emotion-theming";
import { themeLight,themeDark } from './core/theme-config';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/js/bootstrap.js';
import 'font-awesome/css/font-awesome.min.css';
import './index.css';
import App from './App';

function Root() {
  const [isDark, setIsDark] = useState(false);

  return (
    <ThemeProvider theme={isDark ? themeDark : themeLight}>
      <App isDark={isDark} setIsDark={setIsDark} />
    </ThemeProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Root />, rootElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
