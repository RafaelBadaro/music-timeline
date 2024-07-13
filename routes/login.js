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
  // TODO - testar remover os 2 primeiros e ver se retorna a mesma coisa
  var scope = 'user-read-private user-read-email user-library-read';

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