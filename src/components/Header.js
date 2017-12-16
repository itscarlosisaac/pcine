import React from 'react';
import Navigation from './Nav';
import getData from '../fecth/fetch.data'


class Header extends React.Component{
    render(){
        console.log( getData() )
        return(
            <header>
                HEADER COMPONENT
                <Navigation />
            </header>
        )
    }
}

export default Header;