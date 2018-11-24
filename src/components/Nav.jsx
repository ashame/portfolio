import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import './Nav.css'

class Nav extends Component {
    render() {
        const { items } = this.props;
        return (
            <Container id="nav">
                <ul id="navList">
                    {items.map((item, i) =>
                        <li className="navItem" key={i}>
                            <Link to={'/' + item}>
                                {item}
                            </Link>
                        </li>
                    )}
                </ul>
            </Container>
                )
            }
        }
        
export default Nav;