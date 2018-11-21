import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component { 
    render() {
        return (
            <div className="footer">
                <code>
                    <a href="//github.com/ashame" target="_blank" rel="noopener noreferrer">
                        &copy; 2018 nathan liu
                    </a>
                </code>
            </div>
        )
    }
}

export default Footer;