import React, { Component } from "react";
//import "./Signup.css";
import AuthService from './AuthService';
import API from '../utils/API';
import LogoNav from "./navBar";

class Signup extends Component {
    constructor() {
        super();
        this.Auth = new AuthService();
    }

    componentWillMount() {
        if (this.Auth.loggedIn()) {
            this.Auth.logout()
            this.props.history.replace('/sessions');
        }
    }
    state = {
        email: "",
        password: "",
    };

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        let value = event.target.value;
        const name = event.target.name;

        // Updating the input's state
        this.setState({
            [name]: value
        });
        console.log(this.state)
    };

    handleFormSubmit = event => {
        event.preventDefault();
        API.saveUser({ ...this.state })
            .then(res => {
                console.log(res.data);
                // once the user has signed up
                // send them to the login page
                this.props.history.replace('/sessions');
            })
            .catch(err => alert(err));
    };


    render() {
        return (
            //<body className="login-body">
            <div>
                <LogoNav />
                <div className="container">&nbsp;<br />
                    <div id="bg">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3">
                                <h2 id="title-text">Sign Up Form</h2>
                                <form onChange={this.handleInputChange} className="signup">
                                    <div className="form-group">
                                        <label className="text" for="email"><strong>Email</strong> (required)</label>
                                        <input type="email" className="form-control" name="email" value={this.state.email} placeholder="Email" />
                                    </div>
                                    <div className="form-group">
                                        <label className="text" for="password"><strong>Password</strong> (required)</label>
                                        <input type="password" className="form-control" name="password" value={this.state.password} placeholder="Password" />
                                    </div>
                                    <button className="btn btn-primary" id="submit-btn" onClick={this.handleFormSubmit}>Sign Up</button>
                                    <br />
                                    <br />
                                    <p className="text">Already have an account?
                            <a id="btn-link" href="/login">  Log in here</a>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
};

export default Signup;