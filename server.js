//dependcies

var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// Create an instance of the express app.
var app = express();

// set port to 3306 
var PORT = process.env.PORT || 3000;


app.use(express.static(__dirname + '/public'));

/// bodyparsers 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));
app.use(bodyParser.text({ type: 'text/html' }));


app.use(methodOverride('_method'));

// Set Handlebars as the default templating engine.
var exphbs = require('express-handlebars');
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// import routes
var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);

// Initiate the listener.
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});