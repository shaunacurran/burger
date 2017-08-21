//dependecies and router required
var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

// add a '/' endpoint that redirects to the /index route
router.get('/', function(request, res) {
	res.redirect('/index');
});

//
router.get('/index', function(request, res) {
	burger.selectAll(function(data) {
		var hbsObject = {burgers: data};
		console.log(hbsObject);
		res.render('index', hbsObject);
	});
});

// add a '/burgers/insertOne' endpoint that posts the 
// burger name the user entered then as a callback it
// redirects back to the /index route
router.post('/burgers/insertOne', function(request, res) {
	burger.insertOne(['burger_name', 'devoured'], [req.body.name, false], function() {
		res.redirect('/index');
	});
});

// add a '/burgers/updateOne/:id' route that updates
// the status of the burger from being uneaten to eaten
// then does a callback that redirects to the /index endpoint
router.put('/burgers/updateOne/:id', function(request, res) {
	var condition = 'id = ' + req.params.id;
	console.log('condition', condition);

	burger.updateOne({devoured: req.body.devoured}, condition, function() {
		res.redirect('/index');
	});
});

// export the router (controller) back to the server
module.exports = router;