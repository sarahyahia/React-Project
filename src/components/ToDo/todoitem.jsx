import React, { Component } from 'react';


class ToDoItem extends Component {
    state = {  }

    doneClass=()=>{
        return this.props.done === true? "col-4 bg-success":"col-4"
    }

    render() { 
        return (
            <li className={this.doneClass()}>
                {this.props.task.task}
                <i className="far fa-check-square m-2" onClick={()=>this.props.onDone(this.props.task.id)}></i>
                <i className="fas fa-eraser m-2" onClick={()=>this.props.onDelete(this.props.task.id)}></i>
            </li>
        );
    }
}
  

export default ToDoItem;