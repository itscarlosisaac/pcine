import React, { Component } from 'react'
import Movie from './Movie'
import api from '../utils/api'

class MovieList extends Component {
    constructor(props){
        super(props);
        this.state = {
            movieData: [],
            grid: 'grid-4_lg-4_md-4_sm-3_xs-2'
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
            <div className="container">
                <div className={this.state.grid}>
                {
                    this.state.movieData.map( (data) => {
                        return <Movie extraClass="col" key={data.tmdb_id} data={data} />
                    })
                }
                </div>
            </div>
        )
    }
}

export default MovieList