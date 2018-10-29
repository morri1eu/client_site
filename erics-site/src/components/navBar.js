import React, { Component } from 'react';

class Nav extends Component {



    render(){
    return (
        <nav className="navbar navbar-default">
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <a className="navbar-brand" href="#">Elite Prospects</a>
    </div>

    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav">
        <li className="active"><a href="/">Home <span className="sr-only">(current)</span></a></li>
        <li><a href="/products">Gear Up</a></li>
        <li className="dropdown">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Schedule A Session<span className="caret"></span></a>
          <ul className="dropdown-menu">
            <li><a href="/sessions">Individual</a></li>
            <li><a href="/sessions">Small Group 2-5</a></li>
            <li><a href="/sessions">Team 6+</a></li>
            <li role="separator" className="divider"></li>
            <li><a href="/sessions">Reschedule Workout</a></li>
            <li role="separator" className="divider"></li>
            <li><a href="/sessions">Cancel Workout</a></li>
          </ul>
        </li>
      </ul>
      <ul className="nav navbar-nav navbar-right">
        <li><form className="navbar-form navbar-left">
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Search Products"/>
        </div>
        <button type="submit" className="btn btn-default">Submit</button>
      </form>
      </li>
      </ul>
    </div>
  </div>
</nav>
    )}}

    export default Nav