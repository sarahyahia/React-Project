import React, { Component } from 'react';

class Display extends Component {
    state = {   
        exp:'',
        
        }
    render() { 
        return ( 
            <input className="m-2" type="text" placeholder="0" value={this.props.display} onChange={(e)=>this.setState({exp:this.state.exp + e.target.value})} />

         );
    }
}
 
export default Display;