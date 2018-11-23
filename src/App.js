import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Switch } from 'react-router';

import './App.css';
import 'semantic-ui-css/semantic.min.css';
import logo from './logo.svg';
import Nav from './components/Nav';
import navItems from './components/NavItems';
import Footer from './components/Footer';
import MissingPage from './components/MissingPage';

import Articles from './components/Articles';
import NewsPage from './components/NewsPage';

class App extends Component {
  
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
          <header id="App-header">
            <Link to="/">
              <img src={logo} className="App-logo" alt="logo" />
            </Link>
          </header>
          <Nav items={navItems} />
          <div id="content-wrapper">
            <Switch>
              <Route name="root" exact path="/" render={(props) => <NewsPage articles={Articles.home} name="home" {...props} />} />
              <Route name="home" exact path="/home" render={(props) => <NewsPage articles={Articles.home} name="home" {...props} />} />
              <Route name="about" path='/about' render={(props) => <NewsPage articles={Articles.about} name="about" {...props} />} />
              <Route name="education" path='/education' render={(props) => <NewsPage articles={Articles.education} name="education" {...props} />} />
              <Route name="experience" path='/experience' render={(props) => <NewsPage articles={Articles.experience} name="experience" {...props} />} />
              <Route name="projects" path='/projects' render={(props) => <NewsPage articles={Articles.projects} name="projects" {...props} />} />
              <Route name="contact" path='/contact' render={(props) => <NewsPage articles={Articles.contact} name="contact" {...props} />} />
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

