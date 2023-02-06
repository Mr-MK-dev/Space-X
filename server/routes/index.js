var express = require('express');
var router = express.Router();
var launchController = require('../controller/launchController')
/* GET home page. */
router.get('/launch', launchController.getPlanets)
router.post('/launch', launchController.launchRockets);
router.get('/upcoming', launchController.getAllLaunches)

module.exports = router;
