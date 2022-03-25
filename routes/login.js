var express = require('express');
var router = express.Router();
const login = require('../controllers/loginController');

/* GET home page. */
router.get('/', login.index);
module.exports = router;