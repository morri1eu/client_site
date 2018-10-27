import React, { Component } from 'react';
import '../App.css';
import Nav from './navBar'
import Carousel from './carousel'
import Cards from './cards'
import Footer from './footer'
import API from '../utils/API';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

class Products extends Component{

    constructor(props) {
        super(props);
        this.state = { products: [] };
    
      }

      componentWillMount(){
        if (this.props.match.params.type){
          this.getProductsByCategory()
        }
        else{
        this.getProducts()
        }
        console.log("will mount")
      }
      getProducts(){
        API.getProducts()
        .then(res => this.setState({products: res.data})
        )}

        getProductsByCategory(){
          API.getProductsByCategory(this.props.match.params.type)
          .then(res => this.setState({products: res.data}))
        }

      render() {
        return (
        <div>
          <Nav/>
        <div className="container">
          <div className="row">
            {this.state.products.map(products => 
            <Link  to={{pathname: `/products/${products.product_id}`,
            state:{products:products}}}>
              <div class="card col-sm-3" style={{width: "25%"}}>
  <img class="card-img-top products" src={products.product_img_url || 'https://vignette.wikia.nocookie.net/project-pokemon/images/4/47/Placeholder.png/revision/latest/scale-to-width-down/480?cb=20170330235552'} alt="Card image cap"/>
  <div class="card-body">
  <h6>{products.product_name}</h6>
    <p class="card-text">{products.product_price}</p>
  </div>
</div></Link>
           )}</div>
        </div>
        <Footer/>
        </div>
        )}
    }
    export default Products