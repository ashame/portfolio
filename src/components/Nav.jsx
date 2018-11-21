import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'

class Nav extends Component {
    render() {
        const { items } = this.props;
        return (
            <ul id="navList">
                {items.map((item, i) => <li className="navItem" key={i}><Link to={item == 'home' ? '/' : item}>{item}</Link></li>)}
            </ul>
        )
    }
}

export default Nav;