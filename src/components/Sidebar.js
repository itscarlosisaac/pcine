import React, { Component } from 'react'
import Search from './Search'

class Sidebar extends Component {
    render () {
        return (
            <div>
                <h1>Sidebar</h1>
                <Search />
            </div>
        )
    }
}

export default Sidebar