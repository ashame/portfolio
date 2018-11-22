import React, { Component } from 'react';
import { Container, Divider } from 'semantic-ui-react';

class Experience extends Component {
    
    renderArticles() {
        const { articles } = this.props;
        return (
            <Container>
                {articles.default.map((article, i) =>
                    <Container>
                        <span class="title">
                            experience
                        </span>
                        <p>
                            {article.content}
                        </p>
                        {i === articles.default.length - 1 ? '' : <Divider />}
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

export default Experience;