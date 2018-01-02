import React, { Component } from 'react'
import MovieList from '../MovieList'
import Hero from '../Hero'
import Sidebar from '../Sidebar'
import api from '../../utils/api'

class HomePage extends Component {
    constructor(props){
        super(props);
        this.state = {
            movieData: [],
            filteredData: [],
            grid: 'grid-4_lg-4_md-4_sm-3_xs-2'
        }
    }
    componentDidMount(){
        api.fetchMovies().then( (movieData) => { 
            this.setState( (prev, next) => ({
                movieData: movieData,
                filteredData: movieData
            }))
        });
    }
    handleSearch(val){
        this.setState( ( prevState, nextState ) => ({
            filteredData: api.filterMovies( val,  prevState.movieData )    
        }))
    }
    render () {
        return (
            <div>
                <Hero handleSearch={this.handleSearch.bind(this)} />
                <div className="app__main__content">
                    <MovieList movieData={this.state.filteredData}  grid={this.state.grid} />
                    <Sidebar />
                </div>
            </div>
        )
    }
}

export default HomePage