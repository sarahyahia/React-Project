import React, { Component } from 'react';
import NavBar from './navbar';
import ToDoApp from './ToDo/todoapp';
import Product from './product'

class App extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <NavBar/>
                <main className="container m-5">
                    <ToDoApp></ToDoApp>
                    <Product />
                </main>
            
            </React.Fragment>
        )
    }
}
 
export default App;