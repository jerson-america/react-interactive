import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

require('./reset.scss');
require('./global.scss');

// Pages
import Layout from './pages/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Archived from './pages/Archived';

const app = document.getElementById('app');
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path="about" component={About}></Route>
      <Route path="services" component={Services}></Route>
      <Route path="archived" component={Archived}></Route>
    </Route>
  </Router>
  , app);
