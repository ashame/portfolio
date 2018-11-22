import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Switch } from 'react-router';

import './App.css';
import logo from './logo.svg';
import Nav from './components/Nav';
import navItems from './components/NavItems';
import Footer from './components/Footer';
import MissingPage from './components/MissingPage';

import Articles from './components/Articles';
import TextPage from './components/TextPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Link to="/">
              <img src={logo} className="App-logo" alt="logo" />
            </Link>
            <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.0/dist/semantic.min.css"></link>
          </header>
          <Nav items={navItems} />
          <div id="content-wrapper">
            <Switch>
              <Route name="home" exact path="/" render={(props) => <TextPage articles={Articles.home} {...props} />} />
              <Route name="about" exact path="/about" render={(props) => <TextPage articles={Articles.about} {...props} />} />
              <Route name="education" exact path="/education" render={(props) => <TextPage articles={Articles.education} {...props} />} />
              <Route name="experience" exact path="/experience" render={(props) => <TextPage articles={Articles.experience} {...props} />} />
              <Route name="projects" exact path="/projects" render={(props) => <TextPage articles={Articles.projects} {...props} />} />
              <Route name="contact" exact path="/contact" render={(props) => <TextPage articles={Articles.contact} {...props} />} />
              <Route component={MissingPage} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
