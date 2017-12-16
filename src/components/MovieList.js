import React, { Component } from 'react'
import Movie from './Movie'
import api from '../utils/api'



class MovieList extends Component {
    render () {
        console.log( api.fetchMovies().then((data) => {console.log(data) } )  )
        return (
            <div>
                <Movie />
            </div>
        )
    }
}

export default MovieList