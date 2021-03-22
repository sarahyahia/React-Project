import React, { Component } from 'react';


class ToDoAdd extends Component {
    state = {  
        Task:'', 
    }
    addTask=()=>{
        this.props.onAdd(this.state.Task);
        this.setState({Task:''});
    }
    render() { 

        return ( 
            <React.Fragment>
               <h5>Add New Task</h5> 
               <input className="m-2" type="text" placeholder="Task name" value={this.state.Task} onChange={(e)=>this.setState({Task:e.target.value})} />
               <button className="btn btn-success m-2" onClick={this.addTask}>Add</button>
            </React.Fragment>
        );
    }
}


export default ToDoAdd;