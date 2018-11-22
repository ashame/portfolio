import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Switch } from 'react-router';

import './App.css';
import logo from './logo.svg';
import Nav from './components/Nav';
import navItems from './components/NavItems';
import Footer from './components/Footer';
import MissingPage from './components/MissingPage';

import Home from './components/Home';
import Articles from './components/Articles';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

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
              <Route name="home" exact path="/" render={(props) => <Home articles={Articles} {...props} />} />
              <Route name="about" exact path="/about" render={(props) => <About articles={Articles} {...props} />} />
              <Route name="education" exact path="/education" render={(props) => <Education articles={Articles} {...props} />} />
              <Route name="experience" exact path="/experience" render={(props) => <Experience articles={Articles} {...props} />} />
              <Route name="projects" exact path="/projects" render={(props) => <Projects articles={Articles} {...props} />} />
              <Route name="contact" exact path="/contact" render={(props) => <Contact articles={Articles} {...props} />} />
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
