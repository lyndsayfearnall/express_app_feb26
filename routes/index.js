var express = require('express');
var router = express.Router();
var config = require('../config');

var toRender = (config.kidsmode) ? 'main_kids' : 'home';

/* GET home page. */
router.get('/', function(req, res, next) { // / is the route (address bar)
  res.render('home', {
    title: 'Express',
    message: 'hello world',
    mainpage: true,
    cms: false,
    kidsmode: config.kidsmode
  });
});

router.get('/cms', (req, res) => {
  console.log('hit the cms route');
  res.render('cmsForm', {
    cms : true,
    mainpage: false
  });
});

module.exports = router;
