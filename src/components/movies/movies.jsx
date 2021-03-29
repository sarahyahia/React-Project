import React, { Component } from 'react';
import Api from '../api';
import Movie from './movie'


class Movies extends Component {
    
    state={
        data:[],
        }
    async componentDidMount(){
        let data = await Api.getMovies();
        console.log(data);
        this.setState({data:data});
    };
    render() { 
        return ( 
            <div>
                    <h1>Movies...</h1>
                    {this.state.data && this.state.data.length > 0 &&  this.state.data.map((item)=>{
                        return <Movie key={item.id} item={item} />
                    })

                    }
                </div>
         );
    }
}
 
export default Movies;