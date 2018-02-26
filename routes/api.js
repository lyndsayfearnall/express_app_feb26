var express = require('express');
var connect = require('../utils/sqlConnect');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
});

router.get('/:id', function(req, res, next) {
  connect.query(`SELECT * FROM mainmodel where model="${req.params.id}"`, (err, result) => {
    if (err) {
      throw err;
    } else {
      console.log(result);

      res.json(result); //this is just like echoing json with php
    }
  });
});
router.delete('/:id', (res, resp) => {
  console.log('hit the delete route!', req.params.id);
  connect.query(`DELETE FROM mainmodel WHERE model="${req.params.id}"`, (err, result) => {
    if (err) {
      throw err;
    } else {
      console.log(result);
      res.json(result); //send back whatever the result is (probably be an SQL message);
    }
  });
});

module.exports = router;
