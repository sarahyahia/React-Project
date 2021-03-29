import React, { Component } from 'react';
import Api from "../api";


class Login extends Component {
    state = { 
        email:'',
        password:'',
        error:'',
        errors:[

        ]
    }

    login= async()=>{
        let body={
            email:this.state.email,
            password:this.state.password
        }
        let res = await Api.login(body);
        if(res.error){
            let err =[...this.state.errors, res.error];
            this.setState({error:res.error,errors:err});
        }
        
    }
    inputHandler=(e)=>{
        let ip= e.target.name;
        this.setState({[ip]:e.target.value});
        
    }
    render() { 
        return (
            <div className="m-5">
                <h1>Login</h1>
                {this.state.error && <div className="alert alert-danger m-2" role="alert" variant="danger" onClose={(e)=>this.setState({error:""})} dismissible > 
                    {this.state.error}
                    </div>}
                 <input type="email" value={this.state.email} name="email" onChange={this.inputHandler} placeholder="Email"  className="m-2"/><br/>
                 <input type="password" value={this.state.password} name="password" onChange={this.inputHandler} placeholder="Password"  className="m-2" /><br/>
                <button className="btn btn-success m-2" onClick={this.login} >Login</button>
            </div>

          );
    }
}
 
export default Login;