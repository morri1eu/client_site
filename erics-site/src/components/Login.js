import React, { Component } from 'react';
import AuthService from './AuthService';
import { Link } from 'react-router-dom';
import Nav from "./navBar";
//import "./Login.css"

class Login extends Component {
  constructor() {
    super();
    this.Auth = new AuthService();
  }

  componentWillMount() {
    if (this.Auth.loggedIn()) {
      this.Auth.logout()
    }
  }

  handleFormSubmit = event => {
    event.preventDefault();

    this.Auth.login(this.state.email, this.state.password)
      .then(res => {
        console.log("here")
        console.log(res)
        // once user is logged in
        // take them to their profile page
        if(res.data.user.email=="admin@admin.com"){
          this.props.history.replace(`/admin`)
        }
        else{
        this.props.history.replace(`/sessions/${res.data.user.user_id}`);
      }})
      .catch(err => {
        console.log(err);
        alert(err.response.data.message)
      });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div>
        <Nav/>
      <div className="container" id="loginSize">&nbsp;<br />
        <div id="bg">
         
          <h1>Login</h1>
          <form onSubmit={this.handleFormSubmit}>
            <div className="form-group">
              <label htmlFor="email"><strong>Email:</strong></label>
              <input className="form-control"
                placeholder="Email goes here..."
                name="email"
                type="email"
                id="email"
                onChange={this.handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="pwd"><strong>Password:</strong></label>
              <input className="form-control"
                placeholder="Password goes here..."
                name="password"
                type="password"
                id="pwd"
                onChange={this.handleChange} />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
          <p>Don't have an account yet? <Link to="/signup">Sign up here</Link></p>
        </div>
      </div>
      </div>
    );
  }
}

export default Login;