import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import './MissingPage.css';

class MissingPage extends Component {
    render() {
        return (
            <Container>
                <span>
                    error 404 - page not found
                </span>
                <p>
                    no idea how you ended up here, but this isn't supposed to happen..
                </p>
                <p id="report">
                    <Link to="/contact">
                        report a problem!
                    </Link>
                </p>
            </Container>
        )
    }
}

export default MissingPage;