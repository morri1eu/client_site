import React, { Component } from 'react';
import '../App.css';
import Nav from './navBar'
import Carousel from './carousel'
import Cards from './cards'
import Footer from './footer'
import API from '../utils/API';

let it="foo"
class IndividualProduct extends Component{

    constructor(props){
        super(props)
        this.state={
            quantity:0
        }
    }

    componentWillMount(){
    it= this.props.location.state
    this.getProduct()
    }

    getProduct(){
        API.getProduct(this.props.match.params.product_id)
        .then(res=>{ 
            console.log(res)
            this.setState({products: res.data})}
        )}

    render(){
        console.log(it || "nope")
        var img=<img className="col-sm-4" style={{maxWidth: '100%'}} src={this.props.location.state.products.product_img_url || this.state.products.product_img_url || "https://www.bristolgate.com/wp-content/uploads/2018/09/orionthemes-placeholder-image.png"}/>

        return(

        <div><Nav/>
        <div className="container" style={{backgroundColor: 'white', borderRadius:'15px'}}>
        <div className="row">
        {img}
            <div className="col-sm-2"></div>
            <div className="col-sm-6">
                <h3>{this.props.location.state.products.product_name}</h3>
                <p className="row">{this.props.location.state.products.product_description}</p>
                <div style={{marginBottom: '30px'}}>
                    <h6>Quantity</h6><input></input>
                </div>
                <button type='button' className='btn btn-primary'>Add to Cart</button>
            </div>
        </div>
        </div>
        <Footer/>
        </div>
        )
    }
}

export default IndividualProduct