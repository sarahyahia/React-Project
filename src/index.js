import React from 'react';
import ReactDOM from 'react-dom';
import Product from './product';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
import ToDoApp from './todoapp';


ReactDOM.render(
    <div className="m-5">
        <ToDoApp />
        <Product />
    </div>
    
    ,document.querySelector('#root'));