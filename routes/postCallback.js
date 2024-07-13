var express = require('express');
var router = express.Router();
const querystring = require('querystring');

router.post('/', function (req, res) {
    const { access_token, token_type, expires_in, state } = req.body;
    
    if (state === null) {
        res.redirect('/' +
            querystring.stringify({
                error: 'state_mismatch'
            }));
    } else {
    // Docs: https://developer.spotify.com/documentation/web-api/reference/get-users-saved-tracks

        const limit = 50
        const offset = 0
        const get_tracks_url = "https://api.spotify.com/v1/me/tracks"
        const query_first_request = "?limit=1&offset=0"

        //TODO - Make the first request to get the total of songs
        var timeline_objects = []
        var total_tracks;
        const first_response = fetch(get_tracks_url+query_first_request, {
            headers: {
                Authorization: 'Bearer ' + access_token
            }
        });
        first_response
            .then(response => response.json())
            .then(response => {
                total_tracks = response.total
                console.log(response)
                // response.items.forEach((item) => {
                //     var timeline_object = {}
                //     timeline_object.added_at = item.added_at
                //     timeline_object.track_id = item.track.id
                //     timeline_object.track_name = item.track.name
                //     timeline_object.preview_url = item.track.preview_url
                //     timeline_object.image = item.track.album.images -> its a list of 3 images with different widths and heights (640, 300 and 64)

                //     timeline_objects.push(timeline_object)
                // })
                // res.cookie('timeline_objects', timeline_objects)
                res.send(response)
            })

        //TODO - Make a loop for the other requests    
    
            


        // const response = fetch('https://api.spotify.com/v1/me', {
        //     headers: {
        //         Authorization: 'Bearer ' + access_token
        //     }
        // });
        // response
        //     .then(response => response.json())
        //     .then(response => {
        //         console.log(response.display_name)
        //         res.cookie('display_name', response.display_name)
        //         res.send(response)
        //     })
            
    }
});

module.exports = router;