import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { NavBar } from '../components'
import { MoviesInsert } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import TeamLogo from '../components/TeamLogo';

function App() {
    return (
        <Router>
            <NavBar />
            <MoviesInsert />
            <ToastContainer />
            <TeamLogo />
        </Router>
    )
}

export default App
