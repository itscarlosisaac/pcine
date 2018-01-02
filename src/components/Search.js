import React, { Component } from 'react'

class Search extends Component {
    constructor(props){
        super(props)
        this.state = {
            searchTerm: ''
        }
    }
    handleSearch(e){
        e.preventDefault();
        const val = e.target.value;
        this.setState( (prev, next) => ({
            searchTerm: val
        }))
        setTimeout( () => {
            this.props.handleSearch(this.state.searchTerm);
        }, 1 )
    }
    
    onSubmit(e){
        e.preventDefault();
    }
    render () {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input onChange={this.handleSearch.bind(this) } value={this.state.searchTerm} type="search" placeholder="Search for" />
                </form>
            </div>
        )
    }
}

export default Search