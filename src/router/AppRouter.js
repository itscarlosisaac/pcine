import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// Importing Common Components
import Header from '../components/Header'
import Footer from '../components/Footer'
import MovieList from '../components/MovieList'
import Hero from '../components/Hero'
import Sidebar from '../components/Sidebar'

// Importing Page Components
import HomePage from '../components/pages/HomePage'
import ContactPage from '../components/pages/ContactPage'
import NotFoundPage from '../components/pages/NotFoundPage'
import TheathersPage from '../components/pages/TheathersPage'

// App Router
const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Hero />
            <div className="app__main__content">
                <MovieList />
                <Sidebar />
            </div>
            <div>
                <Switch>
                    <Route exact={true} path="/" component={HomePage} />
                    <Route path='/contact' component={ContactPage} />
                    <Route path='/cines' component={TheathersPage} />
                    <Route component={NotFoundPage} />
                </Switch>
            </div>
            <Footer />
        </div>
    </BrowserRouter>
)

export default AppRouter;