import React, { Component } from 'react';
import { Container, Divider } from 'semantic-ui-react';

class TextPage extends Component { 
    renderArticles() {
        const { articles } = this.props;
        return (
            <Container>
                {articles.map((article, i) => 
                    <Container key={i}>
                        <span className="title">
                            {article.title}
                        </span>
                        <p>
                            {article.content}
                        </p>
                        {i === articles.length - 1 ? '' : <Divider />}
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

export default TextPage;