import React, { Component } from 'react'

class Movie extends Component {
    
    render () {
        const { id, original_title, overview, slug, release_date, title, genres, poster_path, images } = this.props.data;
        return (
            <div className="movie__item">
                <img src={images[0]} width="200" />
                <h3>{original_title}</h3>
                <ul>
                    {
                        genres.map( (genre) => {
                            return <li>{genre.name}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Movie