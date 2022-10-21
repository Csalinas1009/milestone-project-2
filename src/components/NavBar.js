import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <><div className='NB'>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>Travelr</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to='/'>Home</Nav.Link>
              <Nav.Link as={Link} to='/About'>About</Nav.Link>
              <Nav.Link as={Link} to='/NewPost'>Create a Post!</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div><div>
      </div>
    </>
  );
}

export default Navigation;