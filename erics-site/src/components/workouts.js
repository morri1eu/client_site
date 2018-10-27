import React, { Component } from 'react';
import '../App.css';
import Nav from './navBar'
import Carousel from './carousel'
import Cards from './cards'
import Footer from './footer'
import API from '../utils/API';
import Table from './workoutTable'

class Workouts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            level: 'Beginner'
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)


    }
    componentWillMount() {
        if (this.props.match.params.body_part == "legs") {
            console.log(this.props.match.params.body_part)
            this.setState({ body_part: "Legs" })
        }
    }
    handleSubmit(event) {
        event.preventDefault()
        API.getWorkout({level:this.state.level,body_part:this.state.body_part})
        .then(res => this.setState({workouts: res.data}))

    }
    handleChange(event) {
        this.setState({ level: event.target.value })
        console.log(this.state.level)
        // event.target.style.display = "none"
    }

    render() {
        console.log(this)
        var table
        if (this.state.workouts){
            table= <Table workouts={this.state.workouts}/>
        }

        return (
            <div>
                <Nav />
                <h2>Sample Workouts</h2>
                <div className="container">
                <form>
                    <div className="row">
                    <label>Fitness Level</label>
                    <br></br>
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                    </select>
                    </div>
                    {table}
                    <div className="row">
                    <button style={{marginTop:"20px"}} type="button" className="btn btn-primary" onClick={this.handleSubmit}>Get Workout</button>
                    </div>
                </form>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Workouts