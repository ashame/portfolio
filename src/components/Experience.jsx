import React, { Component } from 'react';
import { Container, Divider } from 'semantic-ui-react';

class Experience extends Component {
    
    renderArticles() {
        const { articles } = this.props;
        return (
            <Container>
                {articles.experience.map((article, i) =>
                    <Container>
                        <span class="title">
                            {article.title}
                        </span>
                        <p>
                            {article.content}
                        </p>
                        {i === articles.experience.length - 1 ? '' : <Divider />}
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