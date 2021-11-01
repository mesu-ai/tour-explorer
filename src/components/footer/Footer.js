import React from 'react';
import { Col, Container} from 'react-bootstrap';
import Copywrite from '../copywrite/Copywrite';
import QuickLink from '../quicklink/QuickLink';
import WorkHour from '../workhour/WorkHour';
import './Footer.css';

const Footer = () => {
    return (
       
        <div className="footer">
        <Container className="">

            
            <section className="row ">

            {/* quick service link */}
            <Col className="quick-link text-lg-start col-lg-2 col-12 ">
              <QuickLink></QuickLink>
           </Col>

            {/* hospital out-door shedules */}
            <Col className="col col-lg-5 col-md-6 mx-lg-4 px-lg-4 my-lg-0 my-5 outdoor-shedule">
            <h3 className="text-danger fw-bold">Office Hour</h3>
                <WorkHour></WorkHour>
            </Col>


            {/* emergency contract */}
            <Col className="col col-lg-4 col-md-6 col-12 my-lg-0 my-md-5">
                  
                  <h3>0-800-777-2331</h3>                 
                  <div className="d-flex">
                  <i className="fas fa-mobile-alt text-danger fa-4x"></i>
                  <div className="text-lg-start ms-4">
                  <h5>24/7 EMERGENCY NUMBER</h5>
                  <p className="em-status">
                    Call us now if you have any Quary.
                  </p>
                  </div>
                  </div>
                                
            </Col>

            </section>

            <hr />
            
            {/* copywrite and social icon */}
            <section className=" mt-5 copywrite-section ">
                <Copywrite></Copywrite>
            </section>


        </Container>
        </div>
    );
};

export default Footer;