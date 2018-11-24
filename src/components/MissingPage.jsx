import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import './MissingPage.css';

class MissingPage extends Component {
    render() {
        return (
            <Container>
                <span className="title">
                    error 404 - page not found
                </span>
                <p>
                    no idea how you ended up here, but this isn't supposed to happen..
                </p>
                <p id="report">
                    <a href="//github.com/ashame/portfolio/issues/new">
                        report a problem!
                    </a>
                </p>
            </Container>
        )
    }
}

export default MissingPage;