import React, { Component } from 'react'
import Movie from './Movie'
import api from '../utils/api'



class MovieList extends Component {
    constructor(props){
        super(props);
        this.state = {
            movieData: []
        }
    }
    componentDidMount(){
        api.fetchMovies().then( (movieData) => { 
            console.log(movieData)
            this.setState( (prev, next) => ({
                movieData
            }))
        });
    }
    render () {
        return (
            <div>
            {
                this.state.movieData.map( (data) => {
                    return <Movie key={data.tmdb_id} data={data} />
                })
            }
            </div>
        )
    }
}

export default MovieList