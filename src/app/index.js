import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
import { MoviesInsert } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/sealed/player" exact component={MoviesInsert} />
            </Switch>
            <MoviesInsert />
            <ToastContainer />
        </Router>
    )
}

export default App
