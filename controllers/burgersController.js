// Dependencies
var express = require('express')
var router = express.Router()
// Import the model (burger.js) to use its database functions.
var burger = require('../models/burger.js');

// Create all our routes and set up logic within those routes where required.
router.get('/', function (req, res) {
   burger.selectAll(function (data) {
    var handlebarObject = { burgers: data };
    console.log(handlebarObject);
    //renders index.html page
    res.render('index', handlebarObject);
    });
});

// Create a New Burger to the DB
router.post('/burger/create', function (req, res) {
  burger.insertOne(req.body.burger_name, function() {
    res.redirect('/');
  });
});

// Devour a Burger
router.post('/burger/eat', function (req, res) {
  burger.updateOne(req.body.id, function() {
    res.redirect('/');
  });
});
// Exports route for server.js to use.
module.exports = router;