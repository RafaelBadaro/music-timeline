var express = require('express');
var router = express.Router();

/* GET profile page. */
router.get('/', function(req, res, next) {
  let display_name = req.cookies.display_name 

  res.render('profile', { display_name: display_name });
});

module.exports = router;
