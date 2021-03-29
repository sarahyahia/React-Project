import React, { Component } from 'react';
//import NavBar from '../navbar';
import Calc from './Calculator';

class App2 extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                
                <main className="container m-5">
                    <Calc></Calc>
                    
                </main>
            
            </React.Fragment>
        )
    }
}
 
export default App2;