import React from 'react';
import PropTypes from 'prop-types';
import './Navbar.css';
import { Link } from 'react-router-dom';


export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">{props.aboutText}</Link>
                        </li>
                    </ul>
                    <div className={`form-check form-switch theme-buttons 
                    text-${props.mode === 'light' ? 'dark' : 'light'} px-0`}>
                        <button className="theme-button light" 
                        onClick={() => props.toggleMode(0)}>
                        </button>
                        <button className="theme-button dark-blue" 
                        onClick={() => props.toggleMode(1)}>
                        </button>
                        <button className="theme-button dark-green" 
                        onClick={() => props.toggleMode(2)}>
                        </button>
                        <button className="theme-button maroon" 
                        onClick={() => props.toggleMode(3)}>
                        </button>
                        <label className="form-check-label mt-2" htmlFor="theme-button">
                            {`Enable ${props.name} mode`}
                        </label>
                    </div>
                </div>
            </div>
        </nav>
    )
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}
