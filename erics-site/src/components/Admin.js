import React, { Component } from 'react'
import API from '../utils/API';
import Table from "./AdminTables"

class Admin extends Component{
    constructor(props){
        super(props)
        this.state={}
    }

    componentWillMount(){
        API.getProducts()
        .then(res=> this.setState({products:res.data}))
        API.getSessions()
        .then(res => this.setState({sessions: res.data}))
    }
    render(){
        var table1
        if(this.state.products){
            table1= <Table items={this.state.products}/>
        }
        var table2
        if(this.state.sessions){
            table2= <Table items={this.state.sessions}/>
        }

        return(
            <div className="container">
                <div className="row">
                {table1}
                </div>
                <div className="row">
                {table2}
                </div>
            </div>
        )
    }
}
export default Admin