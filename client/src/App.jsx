import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import Search from './pages/Search.jsx';
import Saved from './pages/Saved.jsx'
import Footer from './components/Footer/Footer.jsx';
import Jumbotron from './components/Jumbotron/Jumbotron.jsx'
import "./App.css";

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Jumbotron />
            <React.Fragment>
                <Route exact path = "/" component={Search} />
                <Route exact path = "/search" component={Search} />
                <Route exact path = "/saved" component={Saved} />
            </React.Fragment>
            <Footer />
        </BrowserRouter>
    )
}
export default App;
