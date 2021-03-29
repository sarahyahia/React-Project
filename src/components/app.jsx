import React, { Component } from 'react';
import NavBar from './navbar';
import ToDoApp from './ToDo/todoapp';
import Product from './product';
import App2 from './Calculator/app2';
import Login from './Login/login';
import Movies from './movies/movies'
import Home from './home/home';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class App extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                
                
                <Router>
                <NavBar/>
                <Switch>
                  <Route path="/home" component={Home}>
                  </Route>
                  <Route path="/login" component={Login}>
                  </Route>
                  <Route path="/movie" component={Movies} > 
                  </Route>
                  <Route path="/todo" component={ToDoApp}></Route>
                  <Route path="/"></Route>
                  
                </Switch>
                </Router>  
              
            
            </React.Fragment>
        )
    }
}
 
export default App;