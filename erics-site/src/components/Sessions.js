import React, { Component } from 'react';
import '../App.css';
import Nav from './navBar'
import Carousel from './carousel'
import Cards from './cards'
import Footer from './footer'
import API from '../utils/API';
import AuthService from "./AuthService"
import Calendar from 'react-calendar';
import SessionTable from './SessionsTable'
class Sessions extends Component {
    constructor() {
        super();
        this.Auth = new AuthService();
        this.state = {
            date: new Date(),
            Number_of_Athletes: "Individual",
            Session_Level: "Beginner",
            Name:""
        }
        this.onInput = this.onInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentWillMount() {
        this.setState(this.Auth.getProfile())
    }

    onChange = date => this.setState({ date })

    onInput(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    componentDidMount(){
        API.getSessionsByEmail(this.state.email)
        .then(res => this.setState({sessions:res}))
    }

    handleSubmit(event){
        event.preventDefault()
        var sessionData={
            session_name:this.state.Name,
            session_email:this.state.email,
            session_level:this.state.Session_Level,
            date:this.state.date,
            Number_of_Athletes:this.state.Number_of_Athletes
        }
        console.log(Date.parse(this.state.Date))
        if(this.state.Name.length<1){
            alert("Please Enter a name")
        }
        else if(Date.parse(this.state.Date)<Date.now()){
            alert("Please Select a valid future date")
        }
        else{
            API.saveSession(sessionData)
            .then(res => {
                console.log(res)
                alert(`Session Requested for ${this.state.date}. Please Check Your Email for Confirmation.`)
                window.location.reload()
            })
        }
    }

    render() {
        var d = new Date();
    var n = d;
    var table
        if(this.state.sessions){
            table= <SessionTable sessions={this.state.sessions}/>
        }

        return (
            <div>
                <Nav />
                <div className="container">
                    <div className="row">
                        <h1>Request Sessions</h1>
                        <div className="col-sm-5" style={{ backgroundColor: "white", borderRadius: "15px" }}>
                            <form>
                                <br></br>
                                <label>Name</label>
                                <input name="Name" onInput={this.onInput}></input>
                                <br></br>
                                <br></br>
                                <label># of Athletes</label>
                                <select value={this.state.value} name="Number_of_Athletes" onInput={this.onInput}>
                                    <option value="Individual">1</option>
                                    <option value="Small Group">2-5</option>
                                    <option value="Team">6+</option>
                                </select>
                                <br></br>
                                <br></br>
                                <select name="Session_Level" value={this.state.value} onInput={this.onInput}>
                                    <option value="Beginner">Beginner</option>
                                    <option value="Intermediate">Intermediate</option>
                                    <option value="Advanced">Advanced</option>
                                </select>
                                <br></br>
                                <br></br>
                                <button style={{marginBottom:"20px"}} type="button" className="btn btn-primary" onClick={this.handleSubmit}>Create Session</button>
                            </form>

                        </div>
                        <div className="col-sm-2"></div>
                        <Calendar minDate={n} className="col-sm-5"
                            onChange={this.onChange}
                            value={this.state.date}
                        />
                        <div className="row">
                        </div>
                        <div className="row">
                        <h3>Your Sessions</h3>
                        {table}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sessions