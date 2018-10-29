require("dotenv").config();
const routes= require('./routes')
const express = require('express');
const bodyParser = require('body-parser');
const mysql      = require('mysql');
const jwt = require('jsonwebtoken');
const exjwt = require('express-jwt');
const passport= require("./config/passport")
const session= require("express-session")
// https://github.com/mysqljs/mysql
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'TRevor29!@',
  database : 'eric'
});

// Selecting port
var PORT = process.env.PORT || 3001;

// Require models
var db = require("./models");

// Initialize the app
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));
// PassportJS middleware upkeep
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

const isAuthenticated = exjwt({
  secret: process.env.TOKEN
});
let match
// LOGIN ROUTE
var it
app.post("/api/login", passport.authenticate("local"), function (req, res) {
    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the members page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed
    db.Users.findOne({where: {email:req.body.email}})
    .then(result =>{
      console.log(result.user_id)
    let token = jwt.sign({ id: result.user_id, email: result.email }, process.env.TOKEN, { expiresIn: 129600 }); // Sigining the token
        it=({success: true, message: "Token Issued!", token: token, user: result});
   // console.log(it)
  })
  res.json(it);
});
// SIGNUP ROUTE
app.post('/api/signup', (req, res) => {
  db.Users.create(req.body)
    .then(data => res.json(data))
    .catch(err => res.status(400).json(err));
});


// https://expressjs.com/en/guide/routing.html
 app.get('/api/products', function (req, res) {

    connection.query('SELECT * FROM products', function (error, results, fields) {
      if (error) throw error;
      res.send(results)
      console.log(results)
    });

}); 
app.use(routes);

// Error handling
app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') { // Send the error rather than to show it on the console
    res.status(401).send(err);
  }
  else {
    next(err);
  }
});
//send all requests to react app
//Define any API routes before it runs
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

var syncOptions = { force: false };
// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
    app.listen(PORT, function() {
      console.log(
        "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
        PORT,
        PORT
      )
    });
  });
