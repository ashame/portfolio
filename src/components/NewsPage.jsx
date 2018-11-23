import React, { Component } from 'react';
import { Container, Divider } from 'semantic-ui-react';

class NewsPage extends Component { 
    renderArticles() {
        const { articles } = this.props;
        const { name } = this.props;
        return (
            <Container id={name + '-articles'}>
                {articles.map((article, i) => 
                    <Container key={i} id={name + '-' + article.id} >
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

export default NewsPage;