var express = require('express');
var listCar = require('../models/listCar');
var order = require('../models/order');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render("login", {
    title: "Login",
    layout: false
  });
});

router.get('/dashboard', function (req, res, next) {
  res.render('dashboardTableHome.ejs', {
    title: 'DASHBOARD',
    listCars: listCar,
    orders: order,
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