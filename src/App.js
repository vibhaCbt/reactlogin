import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min'
import { Navbar } from './components'
import { HeaderRoutes } from './routes'


const App = () => {
    
    return (
        <>
        <Router>
            <Navbar />
            <HeaderRoutes />
        </Router>
        
        </>
    )
}

export default App
