import React, { Component } from 'react';

class Product extends Component {
    state = { 
        name: 'messages',
        count: 0,
        imgUrl:"logo192.png",
        names:['Sarah','Yahia','Farouk']
     }
    getClasses(){
        return this.state.count === 0? "badge badge-danger m-2":"badge badge-primary m-2"
    }
    // renderNames(){
    //     if (this.state.names.length === 0){
    //         return <h2>No names</h2>
    //     }
    //     return (
    //         <ul>
    //             {this.state.names.map(name => (<li key={name}>{name}</li>))}
    //          </ul>
    //     )
    // }

    // constructor(){
    //     super();
    //     //rebind this
    //     this.clickHandler = this.clickHandler.bind(this);
    // }

    IncrementHandler = num => {
        this.setState({ count: this.state.count + num});
    }
    render() { 
        return (
            <React.Fragment>
                {/* <img src={this.state.imgUrl} alt=""/> */}
                <div className="row"></div>
                <span>{this.state.name}</span>
                <span className={this.getClasses()} >{this.state.count}</span>
                <button className="btn btn-primary btn-sm" onClick={() => this.IncrementHandler(1)}>+</button>
                
            </React.Fragment>
        );
    }
}
 
export default Product;

        //  {/* {this.state.names.length === 0 &&  <h2>No names</h2>}
        //         <ul>
        //             {this.state.names.map(name => (<li key={name}>{name}</li>))}
        //         </ul> */}
        //         {/* {this.renderNames()} */}