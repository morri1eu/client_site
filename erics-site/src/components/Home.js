import React, { Component } from 'react';
import '../App.css';
import Nav from './navBar'
import Carousel from './carousel'
import Cards from './cards'
import Footer from './footer'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
class Home extends Component {
  render() {
    return (
      <wrapper className="wrapper">
      <div className="App">
      <Nav/>
      <Carousel/>
      <Cards/>     
      </div>  
      <Footer/>
</wrapper>
    );
  }
}

export default Home;
