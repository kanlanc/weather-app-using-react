import React, {Component} from 'react';
import "./Navbar.css"
import {Link} from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <header>
                <h2>
                    <a>Weather App</a>
                </h2>
                <nav>

                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link >
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link >
                    </li>
                </nav>
            </header>

        );
    }
}

export default Navbar;