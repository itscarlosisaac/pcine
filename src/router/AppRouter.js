import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// Importing Common Components
import Header from '../components/Header'
import Footer from '../components/Footer'

// Importing Page Components

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <div>
                <Switch>
                    <Route exact={true} path="/" />
                </Switch>
            </div>
            <Footer />
        </div>
    </BrowserRouter>
)

export default AppRouter;