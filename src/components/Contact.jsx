import React, { Component } from 'react';
import { Container, Divider } from 'semantic-ui-react';

class Contact extends Component {
    
    renderArticles() {
        const { articles } = this.props;
        return (
            <Container>
                {articles.contact.map((article, i) =>
                    <Container>
                        <span class="title">
                            {article.title}
                        </span>
                        <p>
                            {article.content}
                        </p>
                        {i === articles.contact.length - 1 ? '' : <Divider />}
                    </Container>
                )}
            </Container>
        )
    }

    render() {
        return (
            <Container>
                { this.renderArticles() }
            </Container>
        )
    }
}

export default Contact;