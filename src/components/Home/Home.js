import './Home.css';
import { Link } from 'react-router-dom';

function Home() {


    // https://developer.spotify.com/documentation/web-api/reference/get-users-saved-tracks
    // https://api.spotify.com/v1/me/tracks
    var token = ''

    async function getAcessToken() {
        var client_id = '';
        var client_secret = '';

        const authString = client_id + ':' + client_secret;
        const base64AuthString = btoa(authString);

        const authOptions = {
            method: 'POST',
            headers: {
                'Authorization': 'Basic ' + base64AuthString,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'grant_type=client_credentials'
        };

        try {
            const response = await fetch('https://accounts.spotify.com/api/token', authOptions);
            const data = await response.json();

            if (response.ok) {
                token = data.access_token;
                console.log(token);
            } else {
                console.error('Erro:', data.error);
            }
        } catch (error) {
            console.error('Erro ao obter token:', error);
        }
    }

    async function getUserSavedTracks() {
        if (token != "") {
            console.log("tem token meu fi")

            try {
                const getRequestauthOptions = {
                    headers: {
                        'Authorization': 'Bearer  ' + token
                    }
                };

                const response = await fetch('https://api.spotify.com/v1/me/tracks?limit=50&offset=50', getRequestauthOptions);
                const data = await response.json();

                if (response.ok) {
                    console.log(data);
                } else {
                    console.error('Erro DATA:', data.error);
                }
            } catch (error) {
                console.error('Erro:', error);
            }

        } else {
            console.log("tem token NAO")
        }
    }


    return (
        <div className="home-background">
            <div className="home-background-content">
                <h1>This is Gazebo Sessions.</h1>
                <h3>
                    <button onClick={getAcessToken}>GET TOKEN</button>
                    <br />
                    <button onClick={getUserSavedTracks}>GET USER SAVED TRACKS</button>
                </h3>
            </div>
        </div>

    );
}

export default Home;
