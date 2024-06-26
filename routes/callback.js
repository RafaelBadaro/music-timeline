var express = require('express');
var router = express.Router();


/* GET callback page */
router.get('/', function (req, res) {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Callback</title>
    </head>
    <body>
      <script>
        function getHashParams() {
          var hashParams = {};
          var e,
              a = /\\+/g,  // Regex for replacing addition symbol with a space
              r = /([^&;=]+)=?([^&;]*)/g,
              d = function (s) { return decodeURIComponent(s.replace(a, " ")); },
              q = window.location.hash.substring(1);

          while (e = r.exec(q)) {
             hashParams[d(e[1])] = d(e[2]);
          }
          return hashParams;
        }

        var params = getHashParams();
        var accessToken = params.access_token;
        var tokenType = params.token_type;
        var expiresIn = params.expires_in;
        var state = params.state;

        if (accessToken && state) {
          fetch('/postCallback', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
              access_token: accessToken, 
              token_type: tokenType, 
              expires_in: expiresIn, 
              state: state 
            })
          })
          .then(response => response.json())
          .then(data => console.log(data))
          .catch(error => console.error('Error:', error));
        }
      </script>
      <h1>Processing...</h1>
    </body>
    </html>
  `);
});

module.exports = router;