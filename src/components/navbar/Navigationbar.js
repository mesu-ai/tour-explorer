import React from 'react';
import './Navigationbar.css';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import tour from '../../images/tour.png'


const Navigation = () => {
    
    return (
          
        <Navbar collapseOnSelect  sticky="top" expand="lg"  variant="light" className="nav-container">
        <Container>
        <Navbar.Brand href="#home">
        <img
          alt=""
          src={tour}
          width="35"
          height="35"
          className="d-inline-block align-top"
        />{' '}
     <span className="fw-bold fs-4"><span className="text-danger">Tour</span> Explorer</span>
      </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        
        <Nav className="me-auto nav-conatainer d-flex align-items-center">
            <NavLink activeClassName="active text-white" to="/home">Home</NavLink>
            <NavLink activeClassName="active text-white" to="/services">Services</NavLink>
            <NavLink activeClassName="active text-white" to="/tourguide">Tour Guide</NavLink>
            <NavLink activeClassName="active text-white" to="/booking">Booking</NavLink>

            <NavDropdown title="Manage Service" id="collasible-nav-dropdown">
            <NavDropdown.Item activeClassName="active text-white" as={HashLink}  to="/service/add">Add New Service</NavDropdown.Item>
            <NavDropdown.Item as={HashLink} to="/service/myorder">My Order</NavDropdown.Item> 
            <NavDropdown.Item as={HashLink} to="/service/allorder">Manage All Order</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item  to="#action/3.4">Logout</NavDropdown.Item>
            </NavDropdown>
        </Nav>

        <Nav>
        
            <span>name</span>
            <button>Login</button>

            <button>Logout</button>

        </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>

      
    );
};

export default Navigation;