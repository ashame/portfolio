import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'

class Nav extends Component {
    render() {
        return (
            <ul id="navList">
                <li className="navItem">
                    <Link to="">home</Link>
                </li>
                <li className="navItem">
                    <Link to="">test</Link>
                </li>
            </ul>
        )
    }
}

export default Nav;