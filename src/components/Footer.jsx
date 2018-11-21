import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import './Footer.css';

class Footer extends Component { 
    render() {
        return (
            <Container>
                <p id="footer">
                    <a href="//github.com/ashame" target="_blank" rel="noopener noreferrer">
                        &copy; 2018 nathan liu
                    </a>
                </p>
            </Container>
        )
    }
}

export default Footer;