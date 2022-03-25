var express = require('express');
var listCar = require('../models/listCar');
var order = require('../models/order');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express',
  });
});

router.get('/dashboard', function (req, res, next) {
  var items = ['node.js', 'expressjs', 'ejs', 'javascript', 'bootstarp'];
  res.render('dashboardTableHome.ejs', {
    title: 'DASHBOARD',
    listCars: listCar,
    orders: order,
    list: items
  });
});

router.get('/cars', function (req, res, next) {

  res.render('cars.ejs', {
    title: 'CARS'
  });
});

router.get('/addCar', function (req, res, next) {
  res.render('formAddCar.ejs', {
    title: 'ADD CARS',
  });
});

module.exports = router;