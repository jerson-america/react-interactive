import React from 'react';
import ReactDOM from 'react-dom';
require('./reset.scss');
require('./global.scss');

// Pages
import Layout from './pages/Layout';

const app = document.getElementById('app');
ReactDOM.render(<Layout />, app);
