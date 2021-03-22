import React from 'react';
import ReactDOM from 'react-dom';


import Product from './components/product';
import ToDoApp from './components/todoapp';
import App from './components/app'


import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';

ReactDOM.render(
    <App/>
    ,document.querySelector('#root'));