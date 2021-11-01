import React from 'react';
import './Navigationbar.css';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useHistory,NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import tour from '../../images/tour.png'
import useAuth from '../../hooks/useAuth';



const Navigation = () => {
    const {user,logOut}= useAuth();


    const url='/login';
    const history=useHistory();
    const loginPageHandeler=()=>{
        history.push(url);


    }

    
    
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

            <NavDropdown title="Manage Service" id="collasible-nav-dropdown">
            <NavDropdown.Item  as={HashLink}  to="/tour/add">Add Tour Package</NavDropdown.Item>
            <NavDropdown.Item  as={HashLink}  to="/tour/managetour">Manage Tour Package</NavDropdown.Item>
            <NavDropdown.Item as={HashLink} to="/mybooking">My Booking</NavDropdown.Item> 
            <NavDropdown.Item as={HashLink} to="/bookingmanage">Manage Booking</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item  to="#action/3.4">Logout</NavDropdown.Item>
            </NavDropdown>
        </Nav>

        <Nav className="d-flex justify-content-center align-items-center fw-bold">
        
        {user.email && 
        <span className="text-black me-2">{user.displayName}</span>
        
        }
            
        { user.email ? <button className="btn btn-danger" onClick={logOut}>Logout</button> : <button className="btn btn-danger" onClick={loginPageHandeler}>Login</button>
        }
        

        

        </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>

      
    );
};

export default Navigation;