var express = require('express');
var router = express.Router();

/* GET callback page */
router.get('/', function(req, res) {
    console.log("cheguei no callback")
    var code = req.query.code || null;
    var state = req.query.state || null;
  
    if (state === null) {
      res.redirect('/#' +
        querystring.stringify({
          error: 'state_mismatch'
        }));
    } else {
      var authOptions = {
        url: 'https://accounts.spotify.com/api/token',
        form: {
          code: code,
          redirect_uri: redirect_uri,
          grant_type: 'authorization_code'
        },
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64'))
        },
        json: true
      };
    }
  });
  

module.exports = router;