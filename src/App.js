import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import Home from './components/Home';
import Nav from './components/Nav';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />            
            <Nav />
          </header>          
          <div className="content">
            <Route name="home" exact path="/" component={Home} />
          </div>
          <Footer />  
        </div>       
      </Router>
    );
  }
}

export default App;
