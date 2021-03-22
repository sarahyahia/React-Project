import React, { Component } from 'react';


class ToDoAdd extends Component {
    state = {  
        Task:'', 
    }
    addTask=(e)=>{
        this.setState({Task:e.target.value});
    }
    render() { 

        return ( 
            <React.Fragment>
               <h5>Add New Task</h5> 
               <input className="m-2" type="text" placeholder="Task name" onChange={this.addTask} />
               <button className="btn btn-success m-2" onClick={()=>this.props.onAdd(this.state.Task)}>Add</button>
            </React.Fragment>
        );
    }
}


export default ToDoAdd;