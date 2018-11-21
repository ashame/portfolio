import React, { Component } from 'react';
import { Container, Divider } from 'semantic-ui-react';
import './Home.css';

class Home extends Component {

    renderArticles() {
        const { articles } = this.props;
        return (
            <Container>
                {articles.data.map((article, i) =>
                    <Container>
                        <span class="title">
                            {article.title}
                        </span>
                        <p>
                            {article.content}
                        </p>
                        {i === articles.data.length - 1 ? '' : <Divider />}
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

export default Home;