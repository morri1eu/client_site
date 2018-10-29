import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
  } from 'react-router-dom';
import axios from "axios";
import * as serviceWorker from './serviceWorker';
// Components
import Home from "./components/Home.js"
import Products from "./components/Products.js"
import IndividualProduct from "./components/IndividualProduct.js"
import Workouts from "./components/workouts"
import Sessions from "./components/Sessions"
import Login from "./components/Login"
import Signup from './components/Signup';
import Admin from './components/Admin'
ReactDOM.render(<App />, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
ReactDOM.render(
    <Router>
        <div>
            <Switch>
                <Route exact path= "/" component={Home}/>
                <Route exact path="/products" component={Products}/>
                <Route exact path="/products/:product_id" component={IndividualProduct}/>
                <Route exact path="/products/category/:type" component={Products}/>
                <Route exact path="/workouts" component={Workouts}/>
                <Route exact path="/workouts/:body_part" component={Workouts}/>
                <Route exact path="/sessions/:id" component={Sessions}/>
                <Route exact path="/sessions" component={Login}/>
                <Route exact path="/signup" component={Signup}/>
                <Route exact path="/admin" component={Admin}/>
            </Switch>
        </div>
    </Router>
    , document.getElementById('root')
);

serviceWorker.unregister();
