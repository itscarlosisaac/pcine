import React, { Component } from 'react'
import Movie from './Movie'

class MovieList extends Component {
    render () {
        return (
            <div className="container">
                <div className={this.props.grid}>
                {
                    this.props.movieData.map( (data) => {
                        return <Movie extraClass="col" key={data.tmdb_id} data={data} />
                    })
                }
                </div>
            </div>
        )
    }
}

export default MovieList