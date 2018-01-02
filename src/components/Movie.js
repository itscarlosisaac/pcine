import React, { Component } from 'react'

const movie__genre = {
    'listStyle': 'none',
    'display': 'inline-block',
    'marginRight': '5px'
}

const movie__genres = {
    'padding': '0',
    'margin': '0'
}


class Movie extends Component {
    
    render () {
        const { id, original_title, overview, slug, release_date, title, genres, poster_path, images } = this.props.data;
        return (
            <div className={`movie__item ${this.props.extraClass}`}>
                <img className="movie__thumb" src={images[0]} width="200" />
                <h3 className="movie__title">{original_title}</h3>
                <ul className="movie__genres"  style={movie__genres}>
                    {
                        genres.map( (genre) => {
                            return <li style={movie__genre} key={genre.id}>{genre.name}, </li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Movie