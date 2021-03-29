import React, { Component } from 'react';
//import App2 from './Calculator/app2';
import ToDoApp from './ToDo/todoapp';
import App2 from './Calculator/app2';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class NavBar extends Component {
    state = {  }
    render() { 
        return ( 
          
            
              <nav className="navbar navbar-expand-lg navbar-light bg-success">
                  <a className="navbar-brand" href="#">My App</a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                      <li className="nav-item active">
                        <Link className="nav-link" to="/home" >Home </Link>
                      </li>
                      <li className="nav-item">
                      <Link className="nav-link" to="/login">Login </Link>
                      </li>
                      <li className="nav-item">
                      <Link className="nav-link" to="/">Dropdown </Link>  
                      </li>
                      <li className="nav-item">
                      <Link className="nav-link" to="/movie">Movie </Link>
                      </li>
                      <li className="nav-item">
                      <Link className="nav-link" to="/todo">ToDo List </Link>
                      </li>
                    </ul>
                    
                  </div>
                </nav>
                
            
       
         );
    }
}
 
export default NavBar;