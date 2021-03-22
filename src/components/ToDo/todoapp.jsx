import React, { Component } from 'react';
import ToDoList from './todolist'
import ToDoAdd from './todoadd'

class ToDoApp extends Component {
    id = 5
    state = { 
        Tasks : [
            {id:1,task:"Do Nothing",done:false},
            {id:2,task:"Attend Lect 2",done:false},
            {id:3,task:"Complete Lab2",done:false},
            {id:4,task:"Complete Bonus",done:false}
        ]          
    }
    handleDelete=(deltask)=>{
        //Clone
        //Edit
        const updatedTasks=this.state.Tasks.filter(t => t.id !== deltask);
        //setState
        this.setState({ Tasks :updatedTasks});
    }
    handleAdd=(t)=>{
        //Clone
        //Edit
        const updatedTasks=this.state.Tasks.concat({id:this.id++,task:t,done:false});
       //setState
        this.setState({Tasks:updatedTasks});
    }
    handleDone=(donetask)=>{
        //toggle between done and undone
        this.state.Tasks.filter(t => t.id === donetask)[0].done === true?
        this.state.Tasks.filter(t => t.id === donetask)[0].done = false:
        this.state.Tasks.filter(t => t.id === donetask)[0].done = true ;
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
                {this.state.Tasks.map(t=>( <ToDoList key={t.id} className={this.getClass} onDelete={this.handleDelete} onDone={this.handleDone} task={t} done={t.done} />))}
                <ToDoAdd onAdd={this.handleAdd} />
            </React.Fragment>
        );
    }
}


export default ToDoApp;
