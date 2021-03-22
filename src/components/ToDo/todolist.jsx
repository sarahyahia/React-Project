import React, { Component } from 'react';
import ToDoItem from './todoitem';


class ToDoList extends Component {
    // state = { 
    //     Tasks:this.props.task,
    //     done:false
    // }
    
    doneClass=()=>{
        return this.props.done === true? "col-4 bg-success":"col-4"
    }
    render() { 
        
        return (  
            <React.Fragment>
                
                <ul className="row" >
                    <ToDoItem key={this.props.task.id} className={this.props.className} onDelete={this.props.onDelete} onDone={this.props.onDone} task={this.props.task} done={this.props.done}/>
                </ul>
            </React.Fragment>
        );
    }
}


export default ToDoList;