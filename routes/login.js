var express = require('express');
var router = express.Router();
const querystring = require('querystring');

const client_id = '43e1970597df4433bdd2bd66f10c9029';
var redirect_uri = 'http:localhost:3000/callback';

function generateRandomString(length) {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

router.get('/', async function (req, res, next) {
  var state = generateRandomString(16);
  var scope = 'user-read-private user-read-email';

  // var url = 'https://accounts.spotify.com/authorize?' +
  //   querystring.stringify({
  //     response_type: 'token',
  //     client_id: client_id,
  //     scope: scope,
  //     redirect_uri: redirect_uri,
  //     state: state
  //   })

  // try {
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   res.json(data);
  // } catch (error) {
  //   console.error('Error:', error);
  //   res.status(500).send('Internal Server Error');
  // }

  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'token',
      client_id: client_id,
      scope: scope,
      redirect_uri: redirect_uri,
      state: state
    }));


});

module.exports = router;