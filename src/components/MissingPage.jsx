import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MissingPage.css';

class MissingPage extends Component {
    render() {
        return (
            <div id="missingPg">
                <h1>
                    error 404 - page not found
                </h1>
                <p>
                    no idea how you ended up here, but this isn't supposed to happen.
                </p>
                <br />
                <Link to="/contact">
                    report a problem
                </Link>
            </div>
        )
    }
}

export default MissingPage;