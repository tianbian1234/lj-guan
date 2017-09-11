import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import { HashRouter, hashHistory } from 'react-router-dom';
import App from './components/Main';

// Render the main component into the dom
ReactDOM.render(<HashRouter history={hashHistory}>
  <App>

  </App>
</HashRouter>, document.getElementById('app'));
