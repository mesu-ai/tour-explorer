import React from 'react';
import './TourGuide.css';
import { Col, Row } from 'react-bootstrap';
import tourguide from '../../../images/tourguide.png';
import TopPackage from '../tourPackage/TopPackage';
import { Link } from 'react-router-dom';

const Tourguide = () => {
    return (
        
        <div className="tourguide">
            
            <Row style={{height:'550px'}} className="container d-flex  align-items-center mx-auto" >
            <Col className="text-start guide-banner">

            <h1 className="banner-text"> 
            <span className="text-danger text-capitalize">Trasted  ,
           </span> <br />
           Informative !
        </h1>
        <p className="fs-5"></p>
        <p className="text-primary fs-3 fw-bold mb-0"><i>5000 Guides are Ready For You.</i></p>
        <p className="my-0 fw-bold fs-5">Have Travel, Have Fun</p>

        {/* <h3 className="mx-0 my-0 ">31st night celebration</h3> */}
        <p className="my-3">
            <i className="fas fa-star text-warning"></i>
            <i className="fas fa-star text-warning"></i>
            <i className="fas fa-star text-warning"></i>
            <i className="fas fa-star text-warning"></i>
            <i className="fas fa-star text-warning"></i>
        <span className="fw-bold ms-2">(5k)</span> 
        
        
        </p>
        
        <div>
        <Link to=''>
        <button className="btn btn-danger btn-outline-dark text-light rounded-3 mt-4 me-4">Book Now</button>
        </Link>
        
        <Link to='/services'>
        <button className="btn btn-danger btn-outline-dark text-light rounded-3 mt-4 ">View Our Services</button>
        </Link>

        </div>
            
            
            </Col>
            <Col>
            <img className="img-fluid img-thumbnail btn-outline-danger" src={tourguide}  alt="" />
            
            </Col>

        
            



        </Row>

        </div>
      

       
    );
};

export default Tourguide;