const express = require('express');
const router = express.Router();
const curriculoData = require('../constants');

router.get('/', function(req, res, next) {
  res.render('curriculo', curriculoData);
});

module.exports = router;
