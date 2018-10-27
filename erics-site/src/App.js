import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/navBar'
import Carousel from './components/carousel'
import Cards from './components/cards'
import Footer from './components/footer'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Nav/>
      <Carousel/>
      <Cards/>
      <Footer/>
      </div>
    );
  }
}

export default App;
