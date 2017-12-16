import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

class Navigation extends Component {
    render () {
        return (
            <div>
                <nav>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/cines">Cines</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Navigation