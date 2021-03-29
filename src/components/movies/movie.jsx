import React, { Component } from 'react';


class Movie extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="card" style={{width: "12rem",float:"left"}}>
            <img src={this.props.item.avatar}  className="card-img-top" alt="..." />
            <div className="card-body">
               <h5 className="card-title">{this.props.item.first_name}</h5>
               <p className="card-text">Movie Description.</p>
               <a href="#" className="btn btn-success">Watch</a>
            </div>
         </div>
         );
    }
}
 
export default Movie;