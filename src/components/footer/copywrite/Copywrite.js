import React from 'react';
import { Col } from 'react-bootstrap';

const Copywrite = () => {
    return (

        // copywrite and social icon
        <div className="row row-cols-2">

                <Col className="text-lg-start fs-5 px-0 fw-bold"><p>&copy; 2021 Tour Explorer.</p>  </Col>
                
                <Col className="social-icon text-lg-end">
                <i className="fab fa-facebook-square fa-3x  text-primary"></i>
                <i className="fab fa-linkedin fa-3x text-primary mx-2"></i> 
                <i className="fab fa-twitter-square fa-3x text-info"></i>
                </Col>
            
        </div>
    );
};

export default Copywrite;