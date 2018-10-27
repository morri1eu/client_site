require("dotenv").config();
const routes= require('./routes')
const express = require('express');
const bodyParser = require('body-parser');
const mysql      = require('mysql');
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
  