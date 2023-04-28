import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from '../../../Providers/AuthProvider';


const NavigationBar = () => {
    const {user} = useContext(AuthContext)
    return (
        <Container>
            <Navbar className="mt-3" collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                <Link to='/catagory/0'>Home</Link>
              <Nav.Link href="#pricing">About</Nav.Link>
              <Nav.Link href="#pricing">Career</Nav.Link>
            </Nav>
            <Nav>
              {
                user && <FaUserCircle style={{fontSize: '2.5rem'}}></FaUserCircle>
              }
              {
                user ? 
                <Button variant="dark">LogOut</Button>:
                <Link to='/login'><Button variant="dark">LogIn</Button></Link>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        </Container>
    );
};

export default NavigationBar;