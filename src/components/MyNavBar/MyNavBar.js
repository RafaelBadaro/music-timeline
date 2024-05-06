import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo_gazebo from '../../gazebo-logo.jpg'
import './MyNavBar.css';
import { Link, Outlet } from 'react-router-dom';

function MyNavBar() {
  return (
    <>
      <Navbar fixed="top" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={logo_gazebo} className="logo" alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"  />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/sessions">Sessions</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

export default MyNavBar;