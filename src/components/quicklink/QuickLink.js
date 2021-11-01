import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const QuickLink = () => {
    return (

        // Quick Service Link
        <Nav defaultActiveKey="/home" className="flex-column">
                    <Link to="/home">Home</Link>
                    <Link to="">Services</Link>
                    <Link to="">Booking</Link>
                    <Link to="">Contract Us</Link>
                    <Link to="">About Us</Link>
                    
                    <Link to="/register">
                        <Button className="btn btn-danger mt-4">Register Now</Button>
                    </Link>
                    
                    
        </Nav>
    );
};

export default QuickLink;