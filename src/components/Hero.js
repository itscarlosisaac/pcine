import React, { Component } from 'react'
import Search from './Search';

class Hero extends Component {
    render () {
        return (
            <div>
                <Search handleSearch={this.props.handleSearch.bind(this)} />
            </div>
        )
    }
}

export default Hero