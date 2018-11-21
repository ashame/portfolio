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
              <Route name="home" exact path="/home" component={Home} />
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
