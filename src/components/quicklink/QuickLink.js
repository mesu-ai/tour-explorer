import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const QuickLink = () => {
   const {user}= useAuth();


    return (

        // Quick Service Link
        <Nav defaultActiveKey="/home" className="flex-column">
                    <Link to="/home">Home</Link>
                    <Link to="/services">Services</Link>
                    <Link to="">Booking</Link>
                    <Link to="/contractus">Contract Us</Link>
                    <Link to="/about">About Us</Link>
                    

                    {!user.email && 
                    <Link to="/register">
                        <Button className="btn btn-danger mt-4 ">Register Now</Button>
                    </Link>
                    }       
                    
        </Nav>
    );
};

export default QuickLink;