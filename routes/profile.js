var express = require('express');
var router = express.Router();

/* GET profile page. */
router.get('/', function(req, res, next) {
  let display_name = req.cookies.display_name 
  let timeline_objects = req.cookies.timeline_objects

  // TODO - make list horizontal + beautiful
  res.render('profile', { timeline_objects });
});

module.exports = router;
