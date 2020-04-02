import React from "react";
import './Navbar.css';
import ReactLogo from '../../images/g.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
    // use state expanded and setExpanded onClick
    // circle back
  return (
      <React.Fragment>
        <nav className="navbar navbar-expand-md navbar-dark sticky-top bg-dark">
            <Link
                to="/" 
                className="navbar-brand">
                <img src={ReactLogo} alt="react" className="img-fluid" height="99.66px" width="99.6px"/>
            </Link>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link 
                            to="/" 
                            className={
                                window.location.pathname === "/" || window.location.pathname === "/home"
                                ? "nav-link active"
                                : "nav-link"
                            }>
                            Home
                        </Link>
                    </li>
                    &nbsp;|&nbsp;
                    <li className="nav-item">
                        <Link
                            to="/search" 
                            className={
                                window.location.pathname === "/search"
                                    ? "nav-link active"
                                    : "nav-link" 
                            }>
                            Search
                        </Link>
                    </li>
                    &nbsp;|&nbsp;
                    <li className="nav-item">
                        <Link
                            to="/saved" 
                            className={
                                window.location.pathname === "/saved"
                                ? "nav-link active"
                                : "nav-link"
                            }>
                            Saved
                        </Link>
                    </li>
                </ul>
    </nav>
    </React.Fragment>
  )
}
export default Navbar;