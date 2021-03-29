import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/navbar';


import App from './components/app'


import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';

import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min';

ReactDOM.render(
    <App/>
    ,document.querySelector('#root'));