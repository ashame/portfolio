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
          </header>
          <Nav items={navItems} />
          <div className="content">
            <Switch>
              <Route name="home" exact path="/" component={Home} />
              <Route name="about" exact path="/about" component={About} />
              <Route name="education" exact path="/education" component={Education} />
              <Route name="experience" exact path="/experience" component={Experience} />
              <Route name="projects" exact path="/projects" component={Projects} />
              <Route name="contact" exact path="/contact" component={Contact} />
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
