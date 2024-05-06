import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="home-background">
            <div className="home-background-content">
                <h1>This is Gazebo Sessions.</h1>
                <h3>Check out our upcoming 
                    <Link className="link" to="/sessions">sessions</Link>
                </h3>
            </div>
        </div>

    );
}

export default Home;
