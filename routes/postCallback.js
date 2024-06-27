var express = require('express');
var router = express.Router();
const querystring = require('querystring');

router.post('/', function (req, res) {
    const { access_token, token_type, expires_in, state } = req.body;
    // console.log('Access Token:', access_token);
    // console.log('Token Type:', token_type);
    // console.log('Expires In:', expires_in);
    // console.log('State:', state);

    if (state === null) {
        res.redirect('/' +
            querystring.stringify({
                error: 'state_mismatch'
            }));
    } else {
        const response = fetch('https://api.spotify.com/v1/me', {
            headers: {
                Authorization: 'Bearer ' + access_token
            }
        });
        response
            .then(response => response.json())
            .then(response => {
                console.log(response.display_name)
                res.cookie('display_name', response.display_name)
                res.send(response)
            })

        //res.render('profile', { title: data.display_name })

        // response
        //     .then(response => response.json())
        //     .then(response => {
        //         //console.log(response)
        //         res.redirect('/');  // TODO - find out how to redirect to any page with the freshly new data
        //         //res.send("")
        //         //res.render('profile', { title: response.display_name })
        //     })
    }
});

module.exports = router;