import React, { Component } from 'react';


class ToDoApp extends Component {

    state = { 
        Tasks : [
            {task:"Do Nothing",done:false},
            {task:"Attend Lect 2",done:false},
            {task:"Complete Lab2",done:false},
            {task:"Complete Bonus",done:false}
        ]          
    }
    handleDelete=(deltask)=>{
        //Clone
        //Edit
        const updatedTasks=this.state.Tasks.filter(t => t.task !== deltask);
        //setState
        this.setState({ Tasks :updatedTasks});
    }
    handleAdd=(t)=>{
        //Clone
        //Edit
        const updatedTasks=this.state.Tasks.concat({task:t,done:false});
       //setState
        this.setState({Tasks:updatedTasks});
    }
    handleDone=(donetask)=>{
        //toggle between done and undone
        this.state.Tasks.filter(t => t.task === donetask)[0].done === true?
        this.state.Tasks.filter(t => t.task === donetask)[0].done = false:
        this.state.Tasks.filter(t => t.task === donetask)[0].done = true ;
        this.forceUpdate();

        // const Task = [...this.state.Tasks];
        // console.log(Task);
        // const index = Task.indexOf({task:donetask,done:false});
        // Task[index] = {...Task[index]};
        // console.log([index])
        // Task[index].done = true;
        // this.setState({Task});
    }
    
    render() { 
        
        return (
            <React.Fragment> 
                {this.state.Tasks.map(t=>( <ToDoList key={t.task} className={this.getClass} onDelete={this.handleDelete} onDone={this.handleDone} task={t.task} done={t.done} />))}
                <ToDoAdd onAdd={this.handleAdd} />
            </React.Fragment>
        );
    }
}

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
                
                <ul className="row" >{
                    <li className={this.doneClass()}>
                        {this.props.task}
                        <i className="far fa-check-square m-2" onClick={()=>this.props.onDone(this.props.task)}></i>
                        <i className="fas fa-eraser m-2" onClick={()=>this.props.onDelete(this.props.task)}></i>
                    </li>}
                </ul>
            </React.Fragment>
        );
    }
}


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
 
export default ToDoApp;
